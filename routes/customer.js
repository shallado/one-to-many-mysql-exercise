const router = require('express').Router();
const customer = require('../controllers/customer');

const customerRouter = (app) => {
  router.post('/', customer.createCustomer);

  app.use('/api/customers', router);
};

module.exports = customerRouter;