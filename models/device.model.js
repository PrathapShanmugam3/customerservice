module.exports = (sequelize, Sequelize) => {
  const Device = sequelize.define("device", {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    metadata: {
      type: Sequelize.JSON
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'active'
    }
  });

  return Device;
};
