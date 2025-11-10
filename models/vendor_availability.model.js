
module.exports = (sequelize, Sequelize) => {
  const VendorAvailability = sequelize.define("vendor_availability", {
    weekday: {
      type: Sequelize.SMALLINT
    },
    start_time: {
      type: Sequelize.TIME
    },
    end_time: {
      type: Sequelize.TIME
    }
  });

  return VendorAvailability;
};
