const {
  getAllPartners,
  findById,
  postOnePartner,
  putOnePartner,
  deleteOnePartner,
} = require("../models/partner");

module.exports.handlePartnersGetAll = async (req, res) => {
  const rawData = await getAllPartners();
  res.send(rawData);
};

module.exports.handlePartnerGetOne = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handlePartnerPost = async (req, res) => {
  const { name, logo } = req.body;
  const data = await postOnePartner({
    name,
    logo,
  });
  return res.status(201).send(data);
};

module.exports.handlePartnerPutOne = async (req, res) => {
  const { name, logo } = req.body;
  const attribute = {
    name,
    logo,
  };
  const data = await putOnePartner(req.params.id, attribute);
  res.send(data);
};

module.exports.handlePartnerDeleteOne = async (req, res) => {
  await deleteOnePartner(req.params.id);
  res.sendStatus(204);
};
