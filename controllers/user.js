const {
  getAllUsers,
  findById,
  postOneUser,
  putOneUser,
  deleteOneUser,
} = require("../models/user");

module.exports.handleUsersGetAll = async (req, res) => {
  const rawData = await getAllUsers();
  res.send(rawData);
};

module.exports.handleUserGetOne = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handleUserPost = async (req, res) => {
  const { name, price, description, image, category } = req.body;
  const data = await postOneUser({
    name,
    image,
    price,
    description,
    category,
  });
  return res.status(201).send(data);
};

module.exports.handleUserPutOne = async (req, res) => {
  const { name, image, price, description } = req.body;
  const attribute = {
    name,
    image,
    price,
    description,
  };
  const data = await putOneUser(req.params.id, attribute);
  res.send(data);
};

module.exports.handleUserDeleteOne = async (req, res) => {
  await deleteOneUser(req.params.id);
  res.sendStatus(204);
};
