const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Purchases";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    date: {
      type: DataTypes.DATE,
    },

    shopping_cart_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    user_id_address: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {};

  const Purchase = sequelize.define(alias, cols, config);

  return Purchase;
};
