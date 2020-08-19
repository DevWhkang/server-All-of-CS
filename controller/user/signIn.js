const crypto = require('crypto');
const { users } = require('../../models');

module.exports = {
  async post(req, res) {
    try {
      const { email, password: pw } = req.body;
      const password = crypto.createHash('sha1').update(pw).digest('hex').slice(0, 10);
      const user = await users.findOne({ where: { email, password } });
      if (user) {
        const { id } = user;
        req.session.userId = id;
        res.json({ id });
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
