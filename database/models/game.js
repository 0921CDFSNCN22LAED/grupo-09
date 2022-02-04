const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Games";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    name: {
      type: DataTypes.VARCHAR(50),
    },

    description: {
      type: DataTypes.TEXT,
    },

    game_image: {
      type: DataTypes.VARCHAR(50),
    },

    genre_id: {
      type: DataTypes.INT,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
    tableName: "games",
  };

  const Game = sequelize.define(alias, cols, config);

  return Game;
};
