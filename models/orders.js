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

   // gives you orders that belong to specific customers
   findAll(customer_id, cb) {
     sql.query(
       `Select * FROM customers JOIN orders ON customers.id = orders.customer_id WHERE customers.id  = ?`,
       customer_id,
       (err, data) => {
         if (err) {
           cb(err, null);
         }

         cb(null, data);
       }
     )
   }

  return Order;
};

module.exports = order;