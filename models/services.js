const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      services.belongsTo(models.departments, {
        foreignKey: 'department_id',
        as: 'departments',
      });
    }
  }
  services.init({
    service: {
      type: DataTypes.STRING,
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
    modelName: 'services',
  });
  return services;
};
