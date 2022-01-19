'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Category, {foreignKey:"CategoryId"})
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg:"This is required"}
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {msg:"This is required"}
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {msg:"This is required"}
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {msg:"This is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};