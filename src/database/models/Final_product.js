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

  Final_product.associate = (models) => {
    Final_product.hasOne(models.Products, {
      as: "products",
      foreignKey: "id",
    });

    Final_product.hasOne(models.Memories, {
      as: "memories",
      foreignKey: "id",
    });

    Final_product.hasOne(models.Joystick_colors, {
      as: "joystick_colors",
      foreignKey: "id",
    });

    Final_product.hasOne(models.Product_colors, {
      as: "product_colors",
      foreignKey: "id",
    });

    Final_product.belongsTo(models.Orders_final_products, {
      as: "order_final_products",
      foreignKey: "id",
    });
  };

  return Final_product;
};
