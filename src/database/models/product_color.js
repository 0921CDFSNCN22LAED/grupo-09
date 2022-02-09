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
      type: DataTypes.STRING(50),
    },

    color_hex: {
      type: DataTypes.STRING(7),
    },
  };

  const config = {
    timestamps: false,
    tableName: "product_colors",
  };

  const Product_color = sequelize.define(alias, cols, config);

  Product_color.associate = (models) => {
    Product_color.belongsTo(models.Final_products, {
      as: "final_products",
      foreignKey: "product_color_id",
    });
  };

  return Product_color;
};
