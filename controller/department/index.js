const {
  departments, guides, services, CS_numbers,
} = require('../../models');

module.exports = {
  async get(req, res) {
    const { id } = req.params;
    const result = await departments.findAll({
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
      .catch((err) => {
        res.status(500).send(err);
      });
    if (!result) {
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }
    // res.send(`Response[GET]: department (id: ${req.params.id})`);
  },
};
