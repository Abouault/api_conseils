const {
  getAllArticles,
  findById,
  postOneArticle,
  putOneArticle,
  deleteOneArticle,
} = require("../models/article");

module.exports.handleArticlesGetAll = async (req, res) => {
  const rawData = await getAllArticles();
  res.send(rawData);
};

module.exports.handleArticleGetOne = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handleArticlePost = async (req, res) => {
  const { title, content, image } = req.body;
  const data = await postOneArticle({
    title,
    content,
    image,
  });
  return res.status(201).send(data);
};

module.exports.handleArticlePutOne = async (req, res) => {
  const { title, content, image } = req.body;
  const attribute = {
    title,
    content,
    image,
  };
  const data = await putOneArticle(req.params.id, attribute);
  res.send(data);
};

module.exports.handleArticleDeleteOne = async (req, res) => {
  await deleteOneArticle(req.params.id);
  res.sendStatus(204);
};
