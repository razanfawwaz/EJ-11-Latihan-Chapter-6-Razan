"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      // define association here
      Like.belongsTo(models.Post, { foreignKey: "post_id" });
      Like.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Like.init(
    {
      post_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
