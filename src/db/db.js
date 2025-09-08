const pool = require("./pool");

async function insertEmail(email) {
  try {
    await pool.query("INSERT INTO email (endereco) VALUES ($1)", [email]);
    console.log("Email inserted successfully");
  } catch (err) {
    console.error(err);
  }
}
module.exports = { insertEmail };
