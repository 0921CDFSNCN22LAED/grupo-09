module.exports = (sequelize, DataTypes) => {
  const alias = "Users";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremente: true,
    },

    email: {
      type: DataTypes.STRING(50),
    },

    user_name: {
      type: DataTypes.STRING(50),
    },

    password: {
      type: DataTypes.STRING(100),
    },

    user_image: {
      type: DataTypes.STRING(50),
    },

    address: {
      type: DataTypes.STRING(100),
    },

    admin: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
    tableName: "users",
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.hasMany(models.Orders, {
      as: "orders",
      foreignKey: "id",
    });
  };

  return User;
};
