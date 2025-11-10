
module.exports = (sequelize, Sequelize) => {
  const LeadOffer = sequelize.define("lead_offer", {
    status: {
      type: Sequelize.STRING,
      defaultValue: 'pending'
    },
    offered_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    responded_at: {
      type: Sequelize.DATE
    },
    price: {
      type: Sequelize.DECIMAL(10, 2)
    }
  });

  return LeadOffer;
};
