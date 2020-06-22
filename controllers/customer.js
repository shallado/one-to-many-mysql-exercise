const { Customer } = require('../models');

exports.createCustomer = (req, res) => {
  const customerInfo = req.body;

  Customer.prototype.create(customerInfo, (error, customerData) => {
    if (error) {
      res.status(500).send({
        message: 'Unable to add customer',
        error
      });
    }

    res.send({
      message: 'Successfully added customer',
      customerData
    });
  });
};

exports.deleteCustomer = (req, res) => {
  const { customerId } = req.body;

  Customer.prototype.deleteOne(customerId, (error, customerData) => {
    if (error) {
      res.status(500).send({
        message: 'Unable to delete customer',
        error
      })
    }

    res.send({
      message: 'Successfully deleted customer',
      customerData
    });
  });
};