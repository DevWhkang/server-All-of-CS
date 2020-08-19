const { users } = require('../../models');

module.exports = {
  async post(req, res) {
    try {
      const { email, password } = req.body;
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
