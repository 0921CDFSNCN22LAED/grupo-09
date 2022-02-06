const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Genres";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    name: {
      type: DataTypes.VARCHAR(50),
    },
  };

  const config = {
    timestamps: false,
    tableName: "genres",
  };

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = (db) => {
    Genre.hasMany(db.Game, {
      as: "games",
      foreignKey: "genre_id",
    });
  };

  return Genre;
};
