const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tags.belongsToMany(models.users, {
        foreignKey: 'tag_id',
        through: 'user_tag',
        as: 'users',
      });
      tags.belongsToMany(models.companies, {
        foreignKey: 'tag_id',
        through: 'tag_company',
        as: 'companies',
      });
    }
  }
  tags.init({
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'tags',
  });
  return tags;
};
