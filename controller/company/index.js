const { companies, departments } = require('../../models');

module.exports = {
  async get(req, res) {
    try {
      const { id } = req.params;
      const result = await companies.findOne({
        where: { id },
        attributes: ['company'],
        include: [{
          model: departments,
          attributes: ['id', 'department'],
          as: 'departments',
        }],
      });
      if (!result) return res.sendStatus(404);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  },
};
