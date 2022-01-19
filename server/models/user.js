"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "This is required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "This is required" },
          isEmail,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "This is required" },
        },
      },
      role: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "This is required" },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance, options) {
          
        }
      },
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
