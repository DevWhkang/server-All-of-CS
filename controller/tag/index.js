const { tags, companies } = require('../../models');

module.exports = {
  async get(req, res) {
    try {
      const { tag_name } = req.query;
      if (!tag_name) return res.sendStatus(404);

      const result = await tags.findAll({
        where: { tag: tag_name },
        attributes: [],
        include: [
          {
            model: companies,
            as: 'companies',
            attributes: ['id', 'company'],
            through: {
              attributes: [],
            },
          },
        ],
      });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).send(err);
    }
  // res.send(`Response[GET]: tag (query: ${req.query.tag_name})`);
  },
};
