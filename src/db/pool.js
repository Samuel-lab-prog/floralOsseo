const { Pool } = require("pg");
const path = require("path");
const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: path.resolve(__dirname, "../../.env"),
    override: true,
  });
}

const pool = new Pool(
  process.env.NODE_ENV === "production" ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    quiet: true
  } : { 
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  quiet: true
});

module.exports = pool;