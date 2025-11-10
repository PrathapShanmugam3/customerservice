
module.exports = (sequelize, Sequelize) => {
  const Vendor = sequelize.define("vendor", {
    company_name: {
      type: Sequelize.STRING
    },
    service_category: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    district: {
      type: Sequelize.STRING
    },
    pincode: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.TEXT
    },
    rating: {
      type: Sequelize.DECIMAL(3, 2)
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  });

  return Vendor;
};
