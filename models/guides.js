const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class guides extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      guides.belongsTo(models.CS_numbers, {
        foreignKey: 'CS_number_id',
        as: 'CS_numbers',
      });
    }
  }
  guides.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CS_number_id: {
      type: DataTypes.INTEGER,
      references: { model: 'CS_numbers', key: 'id' },
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'guides',
  });
  return guides;
};
