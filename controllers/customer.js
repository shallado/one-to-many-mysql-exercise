const { Customer } = require('../models');
const customer = require('../models/customer');

exports.createCustomer = (req, res) => {
  const customerInfo = req.body;

  Customer.prototype.create(customerInfo, (err, customerData) => {
    if (err) {
      res.status(500).send({
        message: 'Unable to add customer',
        err
      });
    }

    res.send({
      message: 'Successfully added customer',
      customerData
    });
  });
};
