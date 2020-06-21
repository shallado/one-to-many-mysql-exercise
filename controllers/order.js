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

exports.findAllOrders = (req, res) => {
  const {
    customerId
  } = req.body;

  Order.prototype.findAll(customerId, (error, orders) => {
    if (error) {
      res.status(500).send({
        message: 'Error occurred while finding orders',
        error
      });
    }

    if (!orders) {
      res.status(404).send({
        message: 'Unable to find orders try again'
      });
    }

    res.send(orders);
  })
};

exports.listAllOrderTotals = (req, res) => {
  Order.prototype.listTotals((err, orderTotals) => {
    if (err) {
      res.status(500).send({
        message: 'Unable to list out order totals'
      })
    }

    res.send(orderTotals);
  });
}