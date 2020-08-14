const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  departments.init({
    department: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'departments',
  });
  return departments;
};
