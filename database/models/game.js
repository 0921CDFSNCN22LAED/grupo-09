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
      type: DataTypes.VARCHAR(15),
    },

    description: {
      type: DataTypes.TEXT,
    },

    game_image: {
      type: DataTypes.VARCHAR(20),
    },

    genre_id: {
      type: DataTypes.INT,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
  };

  const Game = sequelize.define(alias, cols, config);

  return Game;
};
