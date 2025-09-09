const pool = require("../db/pool");

async function insertEmail(email) {
  try {
    await pool.query("INSERT INTO email (endereco) VALUES ($1)", [email]);
  } catch (err) {
    console.error(err);
  }
}
module.exports = { insertEmail };
