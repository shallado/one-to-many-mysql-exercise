const express = require('express');
const customerRouter = require('./routes/customer');
const orderRouter = require('./routes/order');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

customerRouter(app);
orderRouter(app);

app.listen(port, () => console.log(
  `Successfully connected to the server on port: ${port}`)
);