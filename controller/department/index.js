const {
  departments, guides, services, CS_numbers,
} = require('../../models');

module.exports = {
  async get(req, res) {
    const { id } = req.params;
    await departments.findAll({
      where: {
        id,
      },
      attributes: ['id', 'department'],
      include: [
        {
          model: CS_numbers,
          attributes: ['number'],
          as: 'CS_numbers',
          include: [
            {
              model: guides,
              attributes: ['description'],
              as: 'guides',
            },
          ],
        },
        {
          model: services,
          attributes: ['service'],
          as: 'services',
        },
      ],
    })
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.status(200).json(result);
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
    // res.send(`Response[GET]: department (id: ${req.params.id})`);
  },
};
