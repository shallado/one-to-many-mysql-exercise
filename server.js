const express = require('express');
const customerRouter = require('./routes/customer');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

customerRouter(app);

app.listen(port, () => console.log(
  `Successfully connected to the server on port: ${port}`)
);