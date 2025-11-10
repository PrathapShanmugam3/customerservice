
module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("transaction", {
    amount: {
      type: Sequelize.DECIMAL(12, 2)
    },
    commission: {
      type: Sequelize.DECIMAL(12, 2)
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return Transaction;
};
