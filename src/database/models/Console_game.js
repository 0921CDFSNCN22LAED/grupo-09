const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Consoles_games";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    console_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    genre_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
    tableName: "console_games",
  };

  const Console_game = sequelize.define(alias, cols, config);

  Console_game.associate = (db) => {
    Console_game.hasMany(db.Games, {
      as: "games",
      foreignKey: "games_id",
    });

    Console_game.hasMany(db.Console, {
      as: "consoles",
      foreignKey: "console_id",
    });
  };

  return Console_game;
};
