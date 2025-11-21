module.exports = (sequelize, Sequelize) => {
  const Challenge = sequelize.define("challenge", {
    nonce: {
      type: Sequelize.STRING,
      allowNull: false
    },
    expiresAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  return Challenge;
};
