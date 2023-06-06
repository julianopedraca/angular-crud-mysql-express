require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "livrariacrud",
});



module.exports = connection;
