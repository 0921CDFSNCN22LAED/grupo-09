const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Joystick_colors";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    name: {
      type: DataTypes.VARCHAR(20),
    },

    color_hex: {
      type: DataTypes.VARCHAR(7),
    },
  };

  const config = {
    timestamps: false,
  };

  const Joystick_color = sequelize.define(alias, cols, config);

  return Joystick_color;
};
