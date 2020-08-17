const { users } = require('../../models');

module.exports = {
  async get(req, res) {
    const { userId: id } = req.session;
    if (id) {
      const user = await users.findOne({ where: { id } });
      user ? res.json(user) : res.sendStatus(404);
    } else {
      res.sendStatus(404);
    }
  },

  async post(req, res) {
    const { userId: id } = req.session;
    if (id) {
      const [result] = await users.update({ ...req.body }, { where: { id } });
      res.send({ id: result });
    } else {
      res.sendStatus(404);
    }
  },
};
