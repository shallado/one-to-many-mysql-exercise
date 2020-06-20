const mysql = require("mysql");
const customer = require('./customer');
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
  
  const createCustomers = `CREATE TABLE IF NOT EXISTS customers (
                             id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                             first_name VARCHAR(155) NOT NULL,
                             last_name VARCHAR(155) NOT NULL,
                             email VARCHAR(155) NOT NULL
                           )`;
  const createOrders = `CREATE TABLE IF NOT EXISTS orders (
                          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                          order_date DATE,
                          amount DECIMAL(8, 2),
                          customer_id INT NOT NULL,
                          FOREIGN KEY(customer_id) REFERENCES customers(id)
                       )`

  const tables = [createCustomers, createOrders];

  for (let table of tables) {
    connection.query(table, (err, results) => {
      if (err) {
        return console.log('Unable add table to the database \n', err);
      }

      console.log('Successfully added table to the database \n', results);
    });
  }
});

module.exports = {
  sql: connection,
  Customer: customer(connection)
};