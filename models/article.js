const db = require("../db.js");
const { RecordNotFoundError } = require("../error-types");
const definedAttributesToSqlSet = require("../helpers/definedAttributesToSQLSet.js");

const findById = async (id, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM article WHERE id = ?", [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const getAllArticles = async () => {
  return db.query("SELECT * FROM article");
};

const postOneArticle = async (formData) => {
  return db
    .query(
      `INSERT INTO article SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((res) => findById(res.insertId));
};

const putOneArticle = async (id, formData) => {
  const attribute = definedAttributesToSqlSet(formData);
  return db
    .query(`UPDATE article SET ${attribute} WHERE id = :id`, {
      ...formData,
      id,
    })
    .then(() => findById(id));
};

const deleteOneArticle = async (id) => {
  await db.query("DELETE FROM article WHERE id = ?", id);
};

module.exports = {
  getAllArticles,
  findById,
  postOneArticle,
  putOneArticle,
  deleteOneArticle,
};
