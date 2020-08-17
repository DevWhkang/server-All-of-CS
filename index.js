const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const {
  tagRouter,
  companyRouter,
  departmentRouter,
  userRouter,
  walletRouter,
} = require('./routes');

const app = express();
const port = 3000;
const url = `http://13.125.235.4:${port}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // http:// 동작
  },
}));

app.use('/tags', tagRouter);
app.use('/company', companyRouter);
app.use('/department', departmentRouter);
app.use('/user', userRouter);
app.use('/wallet', walletRouter);

app.listen(port, () => {
  console.log(`Listening on ${url}`);
});

module.exports = app;
