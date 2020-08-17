const { users } = require('../../models');

module.exports = {
  post(req, res) {
    const { email, password } = req.body;

    users.findOne({
      where: {
        email,
      },
    })
      .then((userData) => {
        if (userData) {
          res.status(409);
        } else {
          users.create({
            email,
            password,
          })
            .then((newUserData) => res.status(200).json(newUserData.id));
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
    res.send('Response[POST]: signUp');
  },
};
