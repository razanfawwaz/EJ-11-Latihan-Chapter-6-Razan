"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    static associate(models) {
      // define association here
      Follow.belongsTo(models.User, { foreignKey: "follower_id" });
      Follow.belongsTo(models.User, { foreignKey: "followed_id" });
    }
  }
  Follow.init(
    {
      follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      followed_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Follow",
    }
  );
  return Follow;
};
