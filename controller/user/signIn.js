const { users } = require('../../models');

module.exports = {
  async post(req, res) {
    try {
      const { email, password } = req.body;
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
