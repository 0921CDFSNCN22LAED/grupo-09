const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Users";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    email: {
      type: DataTypes.VARCHAR(100),
    },

    user_name: {
      type: DataTypes.VARCHAR(15),
    },

    address: {
      type: DataTypes.TEXT,
    },

    password: {
      type: DataTypes.VARCHAR(100),
    },

    user_image: {
      type: DataTypes.VARCHAR(100),
    },

    admin: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  return User;
};
