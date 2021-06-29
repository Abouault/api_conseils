const asyncHandler = require("express-async-handler");
const articleRouter = require("express").Router();

const {
  handleArticlesGetAll,
  handleArticleGetOne,
  handleArticlePost,
  handleArticlePutOne,
  handleArticleDeleteOne,
} = require("../controllers/article");

articleRouter.get("/", asyncHandler(handleArticlesGetAll));
articleRouter.get("/:id", asyncHandler(handleArticleGetOne));
articleRouter.post("/", asyncHandler(handleArticlePost));
articleRouter.put("/:id", asyncHandler(handleArticlePutOne));
articleRouter.delete("/:id", asyncHandler(handleArticleDeleteOne));

module.exports = articleRouter;
