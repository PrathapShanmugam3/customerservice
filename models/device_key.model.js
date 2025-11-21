module.exports = (sequelize, Sequelize) => {
  const DeviceKey = sequelize.define("device_key", {
    publicKey: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    algorithm: {
      type: Sequelize.STRING,
      defaultValue: 'ECDSA P-256'
    },
    isCurrent: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  });

  return DeviceKey;
};
