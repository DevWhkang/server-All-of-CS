const { users } = require('../../models');

module.exports = {
  async post(req, res) {
    const { email, password } = req.body;

    const [userData, created] = await users.findOrCreate({
      where: {
        email,
      },
      defaults: {
        username: '',
        password,
      },
    })
      .catch((err) => {
        res.status(500).send(err);
      });
    if (!created) {
      return res.sendStatus(409);
    }
    const data = userData.get({ plain: true });
    return res.status(200).json({ id: data.id });
  },
};
