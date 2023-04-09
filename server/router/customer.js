const Controller = require("../controllers/customer");
const { authentication } = require("../middlewares/authentication");
const router = require("express").Router();

router
  .get("/", Controller.readAllProducts)
  .post("/login", Controller.login)
  .post("/register", Controller.register)
  .get("/:id", Controller.readDetailProduct);

module.exports = router;
