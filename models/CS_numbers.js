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
      CS_numbers.belongsTo(models.departments, {
        foreignKey: 'department_id',
        as: 'departments',
      });
      CS_numbers.hasMany(models.guides, {
        foreignKey: 'CS_number_id',
        as: 'guides',
      });
    }
  }
  CS_numbers.init({
    number: {
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
    modelName: 'CS_numbers',
  });
  return CS_numbers;
};
