require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
