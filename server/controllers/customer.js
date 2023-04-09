const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User, Product, Category, Image } = require("../models");

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password, phoneNumber, username, address } = req.body;
      const newUser = await User.create({
        email,
        password,
        phoneNumber,
        username,
        address,
        role: "customer",
      });

      res.status(201).json({
        id: newUser.id,
        email: newUser.email,
        msg: "Register Success!",
      });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw {
          name: "Error email or password",
        };
      }

      const findUser = await User.findOne({
        where: { email, role: "customer" },
      });

      if (!findUser || !comparePassword(password, findUser.password)) {
        throw {
          name: "Error email or password",
        };
      }

      const access_token = createToken({ id: findUser.id });

      res.status(200).json({ access_token, msg: "Login Success!" });
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
}

module.exports = Controller;
