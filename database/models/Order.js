const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Orders";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    date: {
      type: DataTypes.TIMESTAMP,
    },

    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    address_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: true,
    tableName: "orders",
  };

  const Order = sequelize.define(alias, cols, config);

  return Order;
};
