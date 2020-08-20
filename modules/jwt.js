const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

module.exports = {
  getToken(payload) {
    return jwt.sign(JSON.stringify(payload), secret);
  },
  verifyToken(token) {
    return jwt.verify(token, secret);
  },
};
