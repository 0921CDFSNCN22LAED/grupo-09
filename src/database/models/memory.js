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
    tableName: "memories",
  };

  const Memory = sequelize.define(alias, cols, config);

  Memory.associate = (db) => {
    Memory.belongsTo(db.Final_product, {
      as: "final_products",
      foreignKey: "memory_id",
    });
  };

  return Memory;
};
