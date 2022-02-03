const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Products";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    name: {
      type: DataTypes.VARCHAR(15),
    },

    description: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.INTEGER,
    },

    product_image: {
      type: DataTypes.VARCHAR(50),
    },
  };

  const config = {
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  return Product;
};
