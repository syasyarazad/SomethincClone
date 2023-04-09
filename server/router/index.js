const router = require("express").Router();
const userRouter = require("./user");
const customerRouter = require("./customer");
const productRouter = require("./product");
const categoryRouter = require("./category");
const { authentication } = require("../middlewares/authentication");

router
  .use(userRouter)
  .use("/pub", customerRouter)
  .use(authentication)
  .use("/products", productRouter)
  .use("/categories", categoryRouter);

module.exports = router;
