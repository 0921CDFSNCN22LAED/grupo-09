const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Consols";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    name: {
      type: DataTypes.VARCHAR(15),
    },

    consol_image: {
      type: DataTypes.VARCHAR(20),
    },

    logo: {
      type: DataTypes.VARCHAR(20),
    },
  };

  const config = {
    timestamps: false,
  };

  const Consol = sequelize.define(alias, cols, config);

  return Consol;
};
