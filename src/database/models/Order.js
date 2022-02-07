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
      type: DataTypes.DATE,
    },

    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    user_address: {
      type: DataTypes.STRING(100),
    },
  };

  const config = {
    timestamps: true,
    tableName: "orders",
  };

  const Order = sequelize.define(alias, cols, config);

  Order.associate = (db) => {
    Order.belongsTo(db.Users, {
      as: "users",
      foreignKey: "user_id",
    });

    Order.belongsTo(db.Orders_final_products, {
      as: "order_final_products",
      foreignKey: "order_final_product_id",
    });
  };

  return Order;
};
