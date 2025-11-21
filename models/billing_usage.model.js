module.exports = (sequelize, Sequelize) => {
  const BillingUsage = sequelize.define("billing_usage", {
    events: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    month: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  return BillingUsage;
};
