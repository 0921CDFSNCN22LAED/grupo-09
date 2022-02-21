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

  Order.associate = (models) => {
    Order.hasOne(models.Users, {
      as: "users",
      foreignKey: "id",
    });

    Order.belongsTo(models.Orders_final_products, {
      as: "order_final_products",
      foreignKey: "id",
    });
  };

  return Order;
};
