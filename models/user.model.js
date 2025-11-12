module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING(20),
      unique: true
    },
    email: {
      type: Sequelize.STRING(150),
      unique: true
    },
    password_hash: {
      type: Sequelize.STRING(255)
    },
    role: {
      type: Sequelize.ENUM('user', 'vendor', 'admin'),
      defaultValue: 'user'
    }
  });

  return User;
};
