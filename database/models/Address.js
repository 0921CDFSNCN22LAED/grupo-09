module.exports = (sequelize, DataTypes) => {
  const alias = "Addresses";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    full_address: {
      type: "varchar(50)",
    },

    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
    tableName: "addresses",
  };

  const Address = sequelize.define(alias, cols, config);

  Address.belongsTo(User, {
    as: "users",
    foreignKey: "user_id",
  });

  Address.belongsTo(Order, {
    as: "orders",
    foreignKey: "order_id",
  });

  return Address;
};
