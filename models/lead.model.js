
module.exports = (sequelize, Sequelize) => {
  const Lead = sequelize.define("lead", {
    customer_name: {
      type: Sequelize.STRING
    },
    customer_phone: {
      type: Sequelize.STRING
    },
    service_category: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    pincode: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.TEXT
    },
    preferred_date: {
      type: Sequelize.DATE
    },
    preferred_time: {
      type: Sequelize.TIME
    },
    details: {
      type: Sequelize.TEXT
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'new'
    }
  });

  return Lead;
};
