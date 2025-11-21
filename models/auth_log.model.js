module.exports = (sequelize, Sequelize) => {
  const AuthLog = sequelize.define("auth_log", {
    ipAddress: {
      type: Sequelize.STRING
    },
    userAgent: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return AuthLog;
};
