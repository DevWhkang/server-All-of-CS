const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      companies.belongsToMany(models.tags, {
        foreignKey: 'company_id',
        through: 'tag_company',
        as: 'tags',
      });
      companies.hasMany(models.departments, {
        foreignKey: 'company_id',
        as: 'departments',
      });
    }
  }
  companies.init({
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};
