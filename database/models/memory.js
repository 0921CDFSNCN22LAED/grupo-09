const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Memories";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    memory: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
  };

  const Memory = sequelize.define(alias, cols, config);

  return Memory;
};
