const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.port,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.service = require("../models/service.model.js")(sequelize, Sequelize);
db.booking = require("../models/booking.model.js")(sequelize, Sequelize);
db.review = require("../models/review.model.js")(sequelize, Sequelize);
db.vendor = require("../models/vendor.model.js")(sequelize, Sequelize);

// User-Booking
db.user.hasMany(db.booking, { foreignKey: 'user_id' });
db.booking.belongsTo(db.user, { foreignKey: 'user_id' });

// Vendor-Booking
db.user.hasMany(db.booking, { foreignKey: 'vendor_id' });
db.booking.belongsTo(db.user, { as: 'vendor', foreignKey: 'vendor_id' });

// Service-Booking
db.service.hasMany(db.booking, { foreignKey: 'service_id' });
db.booking.belongsTo(db.service, { foreignKey: 'service_id' });

// Booking-Review
db.booking.hasOne(db.review, { foreignKey: 'booking_id' });
db.review.belongsTo(db.booking, { foreignKey: 'booking_id' });

// User-Vendor
db.user.hasOne(db.vendor, { foreignKey: 'user_id' });
db.vendor.belongsTo(db.user, { foreignKey: 'user_id' });

// Service-Vendor
db.service.hasMany(db.vendor, { foreignKey: 'service_id' });
db.vendor.belongsTo(db.service, { foreignKey: 'service_id' });


module.exports = db;
