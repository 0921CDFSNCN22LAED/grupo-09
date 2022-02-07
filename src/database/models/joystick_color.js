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
      type: DataTypes.STRING(50),
    },

    color_hex: {
      type: DataTypes.STRING(7),
    },
  };

  const config = {
    timestamps: false,
    tableName: "joystick_colors",
  };

  const Joystick_color = sequelize.define(alias, cols, config);

  Joystick_color.associate = (db) => {
    Joystick_color.belongsTo(db.Final_products, {
      as: "final_products",
      foreignKey: "joystick_color_id",
    });
  };

  return Joystick_color;
};
