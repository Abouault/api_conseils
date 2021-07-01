const {
  getAllUsers,
  getAllAnimators,
  findById,
  postOneUser,
  putOneUser,
  deleteOneUser,
} = require("../models/user");

module.exports.handleUsersGetAll = async (req, res) => {
  const rawData = await getAllUsers();
  res.send(rawData);
};

module.exports.handleAllAnimators = async (req, res) => {
  const datas = await getAllAnimators(req);
  res.send(
    datas.map(({ id, firstname, lastname, photo }) => ({
      id,
      firstname,
      lastname,
      photo,
    }))
  );
};

module.exports.handleUserGetOne = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handleUserPost = async (req, res) => {
  const image = req.file ? req.file.path : null;
  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    bio,
    zip_code,
    birthday,
    role,
    facebook_url,
    twitter_url,
    instagram_url,
    linkedin_url,
  } = req.body;
  const data = await postOneUser({
    firstname,
    lastname,
    email,
    password,
    phone,
    bio,
    zip_code,
    birthday,
    role,
    photo: image,
    facebook_url,
    twitter_url,
    instagram_url,
    linkedin_url,
  });
  return res.status(201).send(data);
};

module.exports.handleUserPutOne = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    bio,
    zip_code,
    birthday,
    role,
    photo,
    facebook_url,
    twitter_url,
    instagram_url,
    linkedin_url,
  } = req.body;
  const attribute = {
    firstname,
    lastname,
    email,
    password,
    phone,
    bio,
    zip_code,
    birthday,
    role,
    photo,
    facebook_url,
    twitter_url,
    instagram_url,
    linkedin_url,
  };
  const data = await putOneUser(req.params.id, attribute);
  res.send(data);
};

module.exports.handleUserDeleteOne = async (req, res) => {
  await deleteOneUser(req.params.id);
  res.sendStatus(204);
};
