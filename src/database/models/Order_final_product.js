const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Orders_final_products";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    final_product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    order_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: true,
    tableName: "orders_final_products",
  };

  const Order_final_product = sequelize.define(alias, cols, config);

  Order_final_product.associate = (db) => {
    Order_final_product.belongsTo(db.Final_products, {
      as: "final_products",
      foreignKey: "final_product_id",
    });

    Order_final_product.belongsTo(db.Orders, {
      as: "orders",
      foreignKey: "order_id",
    });
  };

  return Order_final_product;
};
