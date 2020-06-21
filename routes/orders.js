const router = require('express').Router();
const order = require('../controllers/order');

const orderRouter = (app) => {
  router.post('/', order.createOrder);

  app.use('/api/orders', router);
};

module.exports = orderRouter;