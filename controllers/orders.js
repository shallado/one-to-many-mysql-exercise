const {
  Order
} = require('../models');

exports.createOrder = (req, res) => {
  const {
    amount,
    orderDate,
    customerId
  } = req.body;

  Order.prototype.create({
      amount,
      orderDate,
      customerId
    },
    (err, orderData) => {
      if (error) {
        res.status(500).send({
          message: 'Unable to add customer',
          error
        });
      }

      res.send({
        message: 'Successfully added order to the database',
        orderData
      });
    });
};