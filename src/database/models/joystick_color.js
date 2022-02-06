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
      type: DataTypes.VARCHAR(50),
    },

    color_hex: {
      type: DataTypes.VARCHAR(7),
    },
  };

  const config = {
    timestamps: false,
    tableName: "joystick_colors",
  };

  const Joystick_color = sequelize.define(alias, cols, config);

  Joystick_color.associate = (db) => {
    Joystick_color.belongsTo(db.Final_product, {
      as: "final_products",
      foreignKey: "joystick_color_id",
    });
  };

  return Joystick_color;
};
