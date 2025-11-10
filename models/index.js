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
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);
db.vendor = require("../models/vendor.model.js")(sequelize, Sequelize);
db.vendor_availability = require("../models/vendor_availability.model.js")(sequelize, Sequelize);
db.lead = require("../models/lead.model.js")(sequelize, Sequelize);
db.lead_offer = require("../models/lead_offer.model.js")(sequelize, Sequelize);
db.transaction = require("../models/transaction.model.js")(sequelize, Sequelize);
db.review = require("../models/review.model.js")(sequelize, Sequelize);


// Relationships

// User-Role
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

// User-RefreshToken
db.refreshToken.belongsTo(db.user, {
  foreignKey: 'userId', targetKey: 'id'
});
db.user.hasOne(db.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});

// User-Vendor
db.user.hasOne(db.vendor, { foreignKey: 'user_id' });
db.vendor.belongsTo(db.user, { foreignKey: 'user_id' });

// Vendor-VendorAvailability
db.vendor.hasMany(db.vendor_availability, { foreignKey: 'vendor_id' });
db.vendor_availability.belongsTo(db.vendor, { foreignKey: 'vendor_id' });

// User(operator)-Lead
db.user.hasMany(db.lead, { foreignKey: 'created_by' });
db.lead.belongsTo(db.user, { as: 'creator', foreignKey: 'created_by' });

// Lead-Vendor through LeadOffer
db.lead.belongsToMany(db.vendor, { through: db.lead_offer, foreignKey: 'lead_id' });
db.vendor.belongsToMany(db.lead, { through: db.lead_offer, foreignKey: 'vendor_id' });
db.lead.hasMany(db.lead_offer, { foreignKey: 'lead_id' });
db.lead_offer.belongsTo(db.lead, { foreignKey: 'lead_id' });
db.vendor.hasMany(db.lead_offer, { foreignKey: 'vendor_id' });
db.lead_offer.belongsTo(db.vendor, { foreignKey: 'vendor_id' });


// Lead-Transaction
db.lead.hasMany(db.transaction, { foreignKey: 'lead_id' });
db.transaction.belongsTo(db.lead, { foreignKey: 'lead_id' });

// Lead-Review
db.lead.hasMany(db.review, { foreignKey: 'lead_id' });
db.review.belongsTo(db.lead, { foreignKey: 'lead_id' });

// Vendor-Review
db.vendor.hasMany(db.review, { foreignKey: 'vendor_id' });
db.review.belongsTo(db.vendor, { foreignKey: 'vendor_id' });


// ROLES
db.ROLES = ["customer", "vendor", "operator", "admin"];

module.exports = db;
