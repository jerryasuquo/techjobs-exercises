const { Client } = require("pg");
require("dotenv").config();
const db = process.env.NODE_ENV === "test" ? "students-test" : "students";

const client = new Client({
  username: "jerryasuquo",
  host: "localhost",
  database: db,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

client.connect();

module.exports = client;
