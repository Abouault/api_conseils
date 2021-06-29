const asyncHandler = require("express-async-handler");
const faqRouter = require("express").Router();

const {
  handleFaqGetAll,
  handleFaqGetOne,
  handleFaqPost,
  handleFaqPutOne,
  handleFaqDeleteOne,
} = require("../controllers/faq");

faqRouter.get("/", asyncHandler(handleFaqGetAll));
faqRouter.get("/:id", asyncHandler(handleFaqGetOne));
faqRouter.post("/", asyncHandler(handleFaqPost));
faqRouter.put("/:id", asyncHandler(handleFaqPutOne));
faqRouter.delete("/:id", asyncHandler(handleFaqDeleteOne));

module.exports = faqRouter;
