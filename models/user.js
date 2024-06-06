"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: "user_id" });
      User.hasMany(models.Like, { foreignKey: "user_id" });
      User.hasMany(models.Comment, { foreignKey: "user_id" });
      User.belongsToMany(models.User, {
        as: "Followers",
        through: "Follow",
        foreignKey: "followed_id",
      });
      User.belongsToMany(models.User, {
        as: "Following",
        through: "Follow",
        foreignKey: "follower_id",
      });
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      priority_level: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
