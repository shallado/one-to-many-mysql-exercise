const customer = (sql) => {
  class Customer {
    create(customerInfo, cb) {
      const {
        firstName: first_name,
        lastName: last_name,
        email,
      } = customerInfo;

      sql.query(
        'INSERT INTO customers SET first_name = ?, last_name = ?, email = ?',
        [first_name, last_name, email],
        (err, insertData) => {
          if (err) {
            return cb(err, null);
          }

          cb(null, {
            message: `data was inserted with id: ${insertData.insertId}`
          });
        }
      );
    }

    deleteOne(customerId, cb) {
      sql.query(
        `DELETE FROM customers WHERE id = ?`, 
        customerId, 
        (err, customer) => {
          if (err) {
            return cb(err, null)
          }

          cb(null, customer);
        }
      );
    }
  }

  return Customer;
};

module.exports = customer;