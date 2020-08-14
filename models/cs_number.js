const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CS_numbers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CS_numbers.init({
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CS_numbers',
  });
  return CS_numbers;
};
