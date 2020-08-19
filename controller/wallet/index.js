const {
  users, departments, companies, user_department,
} = require('../../models');

module.exports = {
  async get(req, res) {
    try {
      const { userId: id } = req.session;
      if (!id) return res.sendStatus(404);
      const user = await users.findOne({
        where: { id },
        attributes: [],
        include: [
          {
            model: departments,
            as: 'departments',
            attributes: ['id', 'department'],
            through: {
              attributes: [],
            },
            include: [
              {
                model: companies,
                as: 'companies',
                attributes: ['id', 'company'],
              },
            ],
          },
        ],
      });
      const result = user.dataValues.departments.reduce((results, { dataValues }) => {
        const {
          id: department_id, department, companies: { id: company_id, company },
        } = dataValues;
        const companySet = { id: company_id, company };
        const departmentSet = { id: department_id, department };
        const existedCompany = results.find((item) => item.id === company_id);
        if (existedCompany) {
          existedCompany.departments.push({ ...departmentSet });
        } else {
          results.push({ ...companySet, departments: [{ ...departmentSet }] });
        }
        return results;
      }, []);
      return res.json(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async getWithID(req, res) {
    try {
      const { userId } = req.session;
      if (!userId) return res.sendStatus(404);
      const { id } = req.params;
      const user = await users.findOne({
        where: { id: userId },
        include: [
          {
            model: departments,
            as: 'departments',
            where: { id },
            through: {},
          },
        ],
      });
      return res.json({ include: !!user });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async post(req, res) {
    try {
      const { userId = 1 } = req.session;
      if (!userId) return res.sendStatus(404);
      const { id } = req.body;
      const { dataTypes: { user_id, department_id } } = await user_department.findOrCreate({
        where: {
          user_id: userId,
          department_id: id,
        },
      });
      return res.json({ user_id, department_id });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
