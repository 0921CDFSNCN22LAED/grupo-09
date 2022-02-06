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
      type: "varchar(50)",
    },

    color_hex: {
      type: "varchar(7)",
    },
  };

  const config = {
    timestamps: false,
    tableName: "product_colors",
  };

  const Product_color = sequelize.define(alias, cols, config);

  Product_color.associate = (db) => {
    Product_color.belongsTo(db.Final_product, {
      as: "final_products",
      foreignKey: "product_color_id",
    });
  };

  return Product_color;
};
