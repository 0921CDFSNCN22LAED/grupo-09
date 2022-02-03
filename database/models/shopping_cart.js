const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Shopping_carts";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    memory_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    joystick_color_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    product_color_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
  };

  const Shoping_cart = sequelize.define(alias, cols, config);

  return Shoping_cart;
};
