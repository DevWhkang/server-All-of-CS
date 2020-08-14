const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class guide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  guide.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'guides',
  });
  return guide;
};
