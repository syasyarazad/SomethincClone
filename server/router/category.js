const Controller = require("../controllers/category");
const router = require("express").Router();

router
  .post("/", Controller.createCategory)
  .get("/", Controller.readAllCategory)
  .get("/:id", Controller.readDetailCategory)
  .put("/:id", Controller.updateCategory)
  .delete("/:id", Controller.deleteCategory);

module.exports = router;
