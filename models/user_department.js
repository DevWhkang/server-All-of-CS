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
      user_department.belongsTo(models.users, {
        foreignKey: 'user_id',
        as: 'users',
      });
      user_department.belongsTo(models.departments, {
        foreignKey: 'department_id',
        as: 'departments',
      });
    }
  }
  user_department.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' },
      onDelete: 'CASCADE',
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: { model: 'departments', key: 'id' },
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'user_department',
    freezeTableName: true,
    timestamps: false,
  });
  return user_department;
};
