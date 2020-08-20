const {
  departments, guides, services, CS_numbers,
} = require('../../models');

module.exports = {
  async get(req, res) {
    try {
      const { id } = req.params;
      const result = await departments.findOne({
        where: { id },
        attributes: ['id', 'department'],
        include: [{
          model: CS_numbers,
          attributes: ['number'],
          as: 'CS_numbers',
          include: [{
            model: guides,
            attributes: ['description'],
            as: 'guides',
          }],
        },
        {
          model: services,
          attributes: ['service'],
          as: 'services',
        }],
      });
      if (!result) return res.sendStatus(404);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error);
    }
  },
};
