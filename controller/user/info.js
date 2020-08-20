const { users } = require('../../models');
const { hashFunction } = require('../../modules/utils');

module.exports = {
  async get(req, res) {
    try {
      const { userId: id } = req.session;
      if (!id) return res.sendStatus(404);
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
      const { userId } = req.session;
      if (!userId) return res.sendStatus(404);
      const { id } = await users.findOne({ where: { id: userId } });
      if (({}).hasOwnProperty.call(req.body, 'password')) {
        req.body.password = hashFunction(req.body.password, 10);
      }
      await users.update(req.body, { where: { id: userId } });
      return res.json({ id });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  },
};
