const {
  getAllFaq,
  findById,
  postOneFaq,
  putOneFaq,
  deleteOneFaq,
} = require("../models/faq");

module.exports.handleFaqGetAll = async (req, res) => {
  const rawData = await getAllFaq();
  res.send(rawData);
};

module.exports.handleFaqGetOne = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handleFaqPost = async (req, res) => {
  const { question, answer } = req.body;
  const data = await postOneFaq({
    question,
    answer,
  });
  return res.status(201).send(data);
};

module.exports.handleFaqPutOne = async (req, res) => {
  const { question, answer } = req.body;
  const attribute = {
    question,
    answer,
  };
  const data = await putOneFaq(req.params.id, attribute);
  res.send(data);
};

module.exports.handleFaqDeleteOne = async (req, res) => {
  await deleteOneFaq(req.params.id);
  res.sendStatus(204);
};
