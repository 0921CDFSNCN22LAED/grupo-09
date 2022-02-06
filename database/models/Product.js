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
      type: "varchar(15)",
    },

    description: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.INTEGER,
    },

    product_image: {
      type: "varchar(50)",
    },
  };

  const config = {
    timestamps: false,
    tableName: "products",
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (db) => {
    Product.belongsTo(db.Final_product, {
      as: "final_products",
      foreignKey: "product_id",
    });
  };

  return Product;
};
