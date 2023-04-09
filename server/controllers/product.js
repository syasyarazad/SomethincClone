const { formatSlug } = require("../helpers/formatSlug");
const { Product, Image, Category, User, sequelize } = require("../models");

class Controller {
  static async addProduct(req, res, next) {
    try {
      const { name, description, mainImg, price, categoryId, images } =
        req.body;

      const result = await sequelize.transaction(async (t) => {
        const newProduct = await Product.create(
          {
            name,
            slug: formatSlug(name),
            description,
            price,
            mainImg,
            categoryId,
            authorId: req.User.id,
          },
          { transaction: t }
        );

        images.forEach((el) => {
          el.productId = newProduct.id;
        });

        await Image.bulkCreate(images, { transaction: t });

        return newProduct;
      });

      res.status(201).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }
  static async readAllProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [{ model: Image }, { model: Category }, { model: User }],
      });

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }
  static async readDetailProduct(req, res, next) {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id, {
        include: [{ model: Image }, { model: Category }, { model: User }],
      });

      if (!product) {
        throw {
          name: "Product Not Found",
        };
      }

      res.status(200).json({
        data: product,
      });
    } catch (err) {
      next(err);
    }
  }
  static async editProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, mainImg, categoryId } = req.body;

      await Product.update(
        {
          name,
          slug: formatSlug(name),
          description,
          price,
          mainImg,
          categoryId,
          authorId: req.User.id,
        },
        { where: { id } }
      );

      res.status(201).json({
        msg: "Success to update Product",
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id);

      if (!product) {
        throw {
          name: "Product Not Found",
        };
      }

      await Product.destroy({ where: { id } });

      res.status(200).json({
        msg: `Product success to delete`,
        data: product,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
