const mysql = require("mysql");
const { host, user, password, database } = require("../config/db");

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});

connection.connect((err) => {
  if (err) {
    return console.log("Unable to connect to database \n", err.stack);
  }

  console.log('Successfully connected to the database');
});
