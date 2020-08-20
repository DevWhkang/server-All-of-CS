const crypto = require('crypto');

module.exports = {
  hashFunction(data, length) {
    return crypto.createHash('sha1').update(data).digest('hex').slice(0, length);
  },
};
