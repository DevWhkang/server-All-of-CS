const { tags, companies } = require('../../models');

module.exports = {
  async get(req, res) {
    try {
      const { tag_name: tag } = req.query;
      if (!tag) return res.sendStatus(404);
      const [result] = await tags.findAll({
        where: { tag },
        include: [{
          model: companies,
          attributes: ['id', 'company'],
          as: 'companies',
          through: { attributes: [] },
        }],
      });
      return res.status(200).json(result ? result.companies : []);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  // res.send(`Response[GET]: tag (query: ${req.query.tag_name})`);
  },
};
