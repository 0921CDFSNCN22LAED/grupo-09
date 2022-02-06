const sequelize = require("sequelize");
const db = require("");

module.exports = (sequelize, DataTypes) => {
  const alias = "Users";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    email: {
      type: DataTypes.VARCHAR(50),
    },

    user_name: {
      type: DataTypes.VARCHAR(50),
    },

    password: {
      type: DataTypes.VARCHAR(100),
    },

    user_image: {
      type: DataTypes.VARCHAR(50),
    },

    admin: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
    tableName: "users",
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (db) => {
    User.belongsTo(db.Addresses, {
      as: "addresses",
      foreignKey: "user_id",
    });

    User.belongsTo(db.Orders, {
      as: "orders",
      foreignKey: "user_id",
    });
  };

  return User;
};
