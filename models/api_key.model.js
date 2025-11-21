module.exports = (sequelize, Sequelize) => {
  const ApiKey = sequelize.define("api_key", {
    key: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'active'
    }
  });

  return ApiKey;
};
