"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Post, { foreignKey: "post_id" });
      Comment.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Comment.init(
    {
      post_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      comment_text: { type: DataTypes.TEXT, allowNull: false },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
