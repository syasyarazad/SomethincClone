const Controller = require("../controllers/product");
const router = require("express").Router();

router
  .post("/", Controller.addProduct)
  .get("/", Controller.readAllProducts)
  .get("/:id", Controller.readDetailProduct)
  .put("/:id", Controller.editProduct)
  .delete("/:id", Controller.deleteProduct);

module.exports = router;
