const userRouter = require("./user");
const articleRouter = require("./article");
const partnerRouter = require("./partner");
const faqRouter = require("./faq");

module.exports = (app) => {
  app.use("/user", userRouter);
  app.use("/article", articleRouter);
  app.use("/partner", partnerRouter);
  app.use("/faq", faqRouter);
};
