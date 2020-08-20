const { users } = require('../../models');
const { hashFunction } = require('../../modules/utils');

module.exports = {
  async post(req, res) {
    try {
      const { email, password: pw } = req.body;
      const password = hashFunction(pw, 10);
      const user = await users.findOne({ where: { email, password } });
      if (!user) return res.sendStatus(404);
      const { id } = user;
      req.session.userId = id;
      return res.json({ id });
    } catch (error) {
      console.error(error);
      return res.status(500).send(error);
    }
  },
};
