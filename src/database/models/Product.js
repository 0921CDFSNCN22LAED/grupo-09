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
      type: DataTypes.STRING(15),
    },

    description: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.INTEGER,
    },

    product_image: {
<<<<<<< HEAD:database/models/Product.js
      type: "varchar(50)",
=======
      type: DataTypes.STRING(50),
>>>>>>> 6eed903c6dcbac4134c38f99adb3630067efafc4:src/database/models/Product.js
    },
  };

  const config = {
    timestamps: false,
    tableName: "products",
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (db) => {
    Product.belongsTo(db.Final_products, {
      as: "final_products",
      foreignKey: "product_id",
    });
  };

  return Product;
};
