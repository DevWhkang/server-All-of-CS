const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_tag.belongsTo(models.users, {
        foreignKey: 'user_id',
        as: 'users',
      });
      user_tag.belongsTo(models.tags, {
        foreignKey: 'tag_id',
        as: 'tags',
      });
    }
  }
  user_tag.init({
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
    tag_id: {
      type: DataTypes.INTEGER,
      references: { model: 'tags', key: 'id' },
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'user_tag',
    freezeTableName: true,
    timestamps: false,
  });
  return user_tag;
};
