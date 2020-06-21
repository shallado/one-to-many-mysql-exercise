const order = (sql) => {
  class Order {
    create(orderInfo, cb) {
      const {
        amount,
        orderDate,
        customerId
      } = orderInfo;

      sql.query(
        `INSERT INTO orders SET amount = ?, order_date = ?, customer_id = ?`,
        [amount, orderDate, customerId],
        (err, data) => {
          if (err) {
            cb(err, null);
          }

          cb(null, {
            message: `data was inserted with id: ${data.insertId}`
          });
        }
      )
    }
  };

  return Order;
};

module.exports = order;