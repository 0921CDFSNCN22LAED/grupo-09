const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Product_colors";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    name: {
      type: DataTypes.VARCHAR(20),
    },

    color_hex: {
      type: DataTypes.VARCHAR(7),
    },
  };

  const config = {
    timestamps: false,
  };

  const Product_color = sequelize.define(alias, cols, config);

  return Product_color;
};
