const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Consoles";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    name: {
      type: DataTypes.VARCHAR(50),
    },

    console_image: {
      type: DataTypes.VARCHAR(50),
    },

    logo: {
      type: DataTypes.VARCHAR(50),
    },
  };

  const config = {
    timestamps: false,
    tableName: "consoles",
  };

  const Console = sequelize.define(alias, cols, config);

  Console.associate = (db) => {
    Console.belongsToMany(db.Console_game, {
      as: "console",
      foreignKey: "console_id",
    });
  };

  return Console;
};
