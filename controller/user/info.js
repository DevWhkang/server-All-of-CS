const { users } = require('../../models');
const { hashFunction } = require('../../modules/utils');
const { verifyToken } = require('../../modules/jwt');

module.exports = {
  async get(req, res) {
    try {
      const { token } = req.cookies;
      if (!token) return res.sendStatus(404);
      const { id } = verifyToken(token);
      const user = await users.findOne({
        where: { id },
        attributes: ['id', 'username', 'email'],
      });
      return user ? res.json(user) : res.sendStatus(404);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  },

  async post(req, res) {
    try {
      const { token } = req.cookies;
      if (!token) return res.sendStatus(404);
      const { id } = verifyToken(token);
      const { id: userId } = await users.findOne({ where: { id } });
      if (({}).hasOwnProperty.call(req.body, 'password')) {
        req.body.password = hashFunction(req.body.password, 10);
      }
      await users.update(req.body, { where: { id: userId } });
      return res.json({ id: userId });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  },
};
