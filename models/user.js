const db = require("../db.js");
const { RecordNotFoundError } = require("../error-types");
const definedAttributesToSqlSet = require("../helpers/definedAttributesToSQLSet.js");

const findById = async (id, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM user WHERE id = ?", [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const getAllUsers = async () => {
  return db.query("SELECT * FROM user");
};

const postOneUser = async (formData) => {
  return db
    .query(
      `INSERT INTO user SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((res) => findById(res.insertId));
};

const putOneUser = async (id, formData) => {
  const attribute = definedAttributesToSqlSet(formData);
  return db
    .query(`UPDATE user SET ${attribute} WHERE id = :id`, {
      ...formData,
      id,
    })
    .then(() => findById(id));
};

const deleteOneUser = async (id) => {
  await db.query("DELETE FROM user WHERE id = ?", id);
};

module.exports = {
  getAllUsers,
  findById,
  postOneUser,
  putOneUser,
  deleteOneUser,
};
