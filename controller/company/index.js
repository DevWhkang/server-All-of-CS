const { companies, departments } = require('../../models');

module.exports = {
  async get(req, res) {
    const { id } = req.params;

    const result = await companies.findAll({
      where: {
        id,
      },
      attributes: ['company'],
      include: [
        {
          model: departments,
          attributes: ['id', 'department'],
          as: 'departments',
        },
      ],
    })
      .catch((err) => {
        res.status(500).send(err);
      });
    if (!result) {
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }
    // res.send(`Response[GET]: company (id: ${req.params.id})`);
  },
};
