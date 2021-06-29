const db = require("../db.js");
const { RecordNotFoundError } = require("../error-types");
const definedAttributesToSqlSet = require("../helpers/definedAttributesToSQLSet.js");

const findById = async (id, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM faq WHERE id = ?", [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const getAllFaq = async () => {
  return db.query("SELECT * FROM faq");
};

const postOneFaq = async (formData) => {
  return db
    .query(
      `INSERT INTO faq SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((res) => findById(res.insertId));
};

const putOneFaq = async (id, formData) => {
  const attribute = definedAttributesToSqlSet(formData);
  return db
    .query(`UPDATE faq SET ${attribute} WHERE id = :id`, {
      ...formData,
      id,
    })
    .then(() => findById(id));
};

const deleteOneFaq = async (id) => {
  await db.query("DELETE FROM faq WHERE id = ?", id);
};

module.exports = {
  getAllFaq,
  findById,
  postOneFaq,
  putOneFaq,
  deleteOneFaq,
};
