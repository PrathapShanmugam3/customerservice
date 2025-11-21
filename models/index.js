const pg = require('pg');
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
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
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
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.service = require("../models/service.model.js")(sequelize, Sequelize);
db.booking = require("../models/booking.model.js")(sequelize, Sequelize);
db.review = require("../models/review.model.js")(sequelize, Sequelize);
db.vendor = require("../models/vendor.model.js")(sequelize, Sequelize);

// ShadowOTP Models
db.app = require("../models/app.model.js")(sequelize, Sequelize);
db.device = require("../models/device.model.js")(sequelize, Sequelize);
db.device_key = require("../models/device_key.model.js")(sequelize, Sequelize);
db.challenge = require("../models/challenge.model.js")(sequelize, Sequelize);
db.auth_log = require("../models/auth_log.model.js")(sequelize, Sequelize);
db.api_key = require("../models/api_key.model.js")(sequelize, Sequelize);
db.billing_usage = require("../models/billing_usage.model.js")(sequelize, Sequelize);

// Relationships
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// User-Booking
db.user.hasMany(db.booking, { foreignKey: 'user_id' });
db.booking.belongsTo(db.user, { foreignKey: 'user_id' });

// ShadowOTP Relationships
db.app.belongsTo(db.user); // Each app belongs to a user
db.user.hasMany(db.app);

db.device.belongsTo(db.app); // Each device is registered to an app
db.app.hasMany(db.device);

db.device.belongsTo(db.user); // Each device is owned by a user
db.user.hasMany(db.device);

db.device_key.belongsTo(db.device); // Each key is linked to a device
db.device.hasMany(db.device_key);

db.challenge.belongsTo(db.device); // Each challenge is for a device
db.device.hasMany(db.challenge);

db.auth_log.belongsTo(db.device);
db.device.hasMany(db.auth_log);

db.auth_log.belongsTo(db.user);
db.user.hasMany(db.auth_log);

db.api_key.belongsTo(db.app); // API keys are issued per app
db.app.hasMany(db.api_key);

db.billing_usage.belongsTo(db.app); // Billing is tracked per app
db.app.hasOne(db.billing_usage);

db.ROLES = ["customer", "operator", "vendor", "admin"];

module.exports = db;