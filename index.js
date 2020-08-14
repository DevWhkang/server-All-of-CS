const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(port, () => {
  console.log('Hi');
});

module.exports = app;
