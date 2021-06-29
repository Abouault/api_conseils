const userRouter = require("./user");
const articleRouter = require("./article");

module.exports = (app) => {
  app.use("/user", userRouter);
  app.use("/article", articleRouter);
};
