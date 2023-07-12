"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeManagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeManagement.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3],
            msg: "Title must be greater than 3 characters",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 500],
          msg: "Description must be between 1 and 500 characters",
        },
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 1000],
        },
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 5000],
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "RecipeApplication",
      tableName: "recipe_applications",
      underscored: true,
    }
  );
  return RecipeManagement;
};