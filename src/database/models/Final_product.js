const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Final_products";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    memory_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    joystick_color_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    product_color_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
    tableName: "final_products",
  };

  const Final_product = sequelize.define(alias, cols, config);

  Final_product.associate = (db) => {
    Final_product.belongsTo(db.Products, {
      as: "products",
      foreignKey: "product_id",
    });

    Final_product.belongsTo(db.Memories, {
      as: "memories",
      foreignKey: "memory_id",
    });

    Final_product.belongsTo(db.Joystick_colors, {
      as: "joystick_colors",
      foreignKey: "joystick_color_id",
    });

    Final_product.belongsTo(db.Product_colors, {
      as: "product_colors",
      foreignKey: "product_color_id",
    });

    Final_product.belongsTo(db.Orders_final_products, {
      as: "order_final_products",
      foreignKey: "final_product_id",
    });
  };

  return Final_product;
};
