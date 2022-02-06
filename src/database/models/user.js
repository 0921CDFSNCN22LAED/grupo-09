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

    admin: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
    tableName: "users",
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (db) => {
    User.belongsTo(db.Orders, {
      as: "orders",
      foreignKey: "user_id",
    });
  };

  return User;
};
