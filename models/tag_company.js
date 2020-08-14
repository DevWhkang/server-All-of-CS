const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tag_company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tag_company.init({
    tag_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tag_company',
  });
  return tag_company;
};
