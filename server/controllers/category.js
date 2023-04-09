const { Category } = require("../models");

class Controller {
  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;

      const newCategory = await Category.create({ name });

      res.status(201).json({ data: newCategory });
    } catch (err) {
      next(err);
    }
  }
  static async readAllCategory(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
  static async readDetailCategory(req, res, next) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category) {
        throw {
          name: "Category Not Found",
        };
      }

      res.status(200).json({ data: category });
    } catch (err) {
      next(err);
    }
  }
  static async updateCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      await Category.update({ name }, { where: { id } });

      res.status(201).json({
        msg: "Success to update Category",
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        throw {
          name: "Category Not Found",
        };
      }

      await Category.destroy({
        where: { id },
      });

      res.status(200).json({
        msg: "Category success to delete",
        data: category,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
