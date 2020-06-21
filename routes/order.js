const router = require('express').Router();
const order = require('../controllers/order');

const orderRouter = (app) => {
  router.post('/', order.createOrder);

  router.get('/', order.findAllOrders);

  router.get('/totals', order.listAllOrderTotals);

  app.use('/api/orders', router);
};

module.exports = orderRouter;