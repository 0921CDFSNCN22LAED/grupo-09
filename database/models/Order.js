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
      type: "TIMESTAMP",
    },

    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    address_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: true,
    tableName: "orders",
  };

  const Order = sequelize.define(alias, cols, config);

  Order.associate = (db) => {
    Order.belongsTo(db.User, {
      as: "users",
      foreignKey: "user_id",
    });

    Order.belongsTo(db.Address, {
      as: "addresses",
      foreignKey: "address_id",
    });

    Order.belongsTo(db.Order_final_product, {
      as: "order_final_products",
      foreignKey: "order_final_product_id",
    });
  };

  return Order;
};
