const { users } = require('../../models');
const { hashFunction } = require('../../modules/utils');

module.exports = {
  async post(req, res) {
    try {
      const { email, password: pw } = req.body;
      const password = hashFunction(pw, 10);
      const [userData, created] = await users.findOrCreate({
        where: { email },
        defaults: { username: '', password },
      });
      if (!created) return res.sendStatus(409);
      return res.status(200).json({ id: userData.id });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  },
};
