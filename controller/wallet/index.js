const {
  users, departments, companies, user_department,
} = require('../../models');
const { verifyToken } = require('../../modules/jwt');

module.exports = {
  async get(req, res) {
    try {
      const { token } = req.cookies;
      if (!token) return res.sendStatus(404);
      const { id } = verifyToken(token);
      const user = await users.findOne({
        where: { id },
        attributes: [],
        include: [{
          model: departments,
          as: 'departments',
          attributes: ['id', 'department'],
          through: {
            attributes: [],
          },
          include: [{
            model: companies,
            as: 'companies',
            attributes: ['id', 'company'],
          }],
        }],
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
      console.error(error);
      return res.sendStatus(500);
    }
  },

  async getWithID(req, res) {
    try {
      const { token } = req.cookies;
      if (!token) return res.sendStatus(404);
      const { id: userId } = verifyToken(token);
      const { id } = req.params;
      const user = await users.findOne({
        where: { id: userId },
        include: [{
          model: departments,
          as: 'departments',
          where: { id },
          through: {},
        }],
      });
      return res.json({ include: !!user });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  },

  async post(req, res) {
    try {
      const { token } = req.cookies;
      if (!token) return res.sendStatus(404);
      const { id: userId } = verifyToken(token);
      const { id } = req.body;
      const [result, created] = await user_department.findOrCreate({
        where: { user_id: userId, department_id: id },
      });
      if (!created) return res.sendStatus(409);
      const { dataValues: department } = await departments.findOne({
        where: { id: result.department_id },
        include: [{
          model: companies,
          as: 'companies',
        }],
      });
      return res.json({
        company_id: department.company_id,
        department_id: department.id,
      });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  },
};
