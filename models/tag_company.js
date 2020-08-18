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
      tag_company.belongsTo(models.tags, {
        foreignKey: 'tag_id',
        as: 'tags',
      });
      tag_company.belongsTo(models.companies, {
        foreignKey: 'company_id',
        as: 'companies',
      });
    }
  }
  tag_company.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: { model: 'tags', key: 'id' },
      onDelete: 'CASCADE',
      allowNull: false,
    },
    company_id: {
      type: DataTypes.INTEGER,
      references: { model: 'companies', key: 'id' },
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'tag_company',
    freezeTableName: true,
    timestamps: false,
  });
  return tag_company;
};
