const userRouter = require("./user");
const articleRouter = require("./article");
const partnerRouter = require("./partner");

module.exports = (app) => {
  app.use("/user", userRouter);
  app.use("/article", articleRouter);
  app.use("/partner", partnerRouter);
};
