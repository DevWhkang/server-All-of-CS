const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_department.init({
    user_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'user_department',
  });
  return user_department;
};
