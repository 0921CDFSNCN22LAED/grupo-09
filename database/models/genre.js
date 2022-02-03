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
      type: DataTypes.VARCHAR(15),
    },
  };

  const config = {
    timestamps: false,
  };

  const Genre = sequelize.define(alias, cols, config);

  return Genre;
};
