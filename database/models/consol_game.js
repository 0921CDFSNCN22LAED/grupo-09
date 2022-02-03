const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Consols_games";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    consol_id: {
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
  };

  const Consol_game = sequelize.define(alias, cols, config);

  return Consol_game;
};
