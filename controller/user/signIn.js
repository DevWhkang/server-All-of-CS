const { users } = require('../../models');
const { hashFunction } = require('../../modules/utils');
const { getToken } = require('../../modules/jwt');

module.exports = {
  async post(req, res) {
    try {
      const { email, password: pw } = req.body;
      const password = hashFunction(pw, 10);
      const user = await users.findOne({ where: { email, password } });
      if (!user) return res.sendStatus(404);
      const { id } = user;
      const token = getToken(user);
      res.cookie('token', token);
      return res.json({ id });
    } catch (error) {
      console.error(error);
      return res.status(500).send(error);
    }
  },
};
