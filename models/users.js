const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.departments, {
        foreignKey: 'user_id',
        through: 'user_department',
        as: 'departments',
      });
      users.belongsToMany(models.tags, {
        foreignKey: 'user_id',
        through: 'user_tag',
        as: 'tags',
      });
    }
  }
  users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
