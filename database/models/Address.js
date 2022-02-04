const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Addresses";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    full_address: {
      type: DataTypes.VARCHAR(50),
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

  return Address;
};
