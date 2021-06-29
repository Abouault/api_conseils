const db = require("../db.js");
const { RecordNotFoundError } = require("../error-types");
const definedAttributesToSqlSet = require("../helpers/definedAttributesToSQLSet.js");

const findById = async (id, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM partner WHERE id = ?", [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const getAllPartners = async () => {
  return db.query("SELECT * FROM partner");
};

const postOnePartner = async (formData) => {
  return db
    .query(
      `INSERT INTO partner SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((res) => findById(res.insertId));
};

const putOnePartner = async (id, formData) => {
  const attribute = definedAttributesToSqlSet(formData);
  return db
    .query(`UPDATE partner SET ${attribute} WHERE id = :id`, {
      ...formData,
      id,
    })
    .then(() => findById(id));
};

const deleteOnePartner = async (id) => {
  await db.query("DELETE FROM partner WHERE id = ?", id);
};

module.exports = {
  getAllPartners,
  findById,
  postOnePartner,
  putOnePartner,
  deleteOnePartner,
};
