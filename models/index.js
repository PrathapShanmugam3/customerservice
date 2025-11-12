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
      db.service = require("../models/service.model.js")(sequelize, Sequelize);
      db.booking = require("../models/booking.model.js")(sequelize, Sequelize);
      db.review = require("../models/review.model.js")(sequelize, Sequelize);
      db.vendor = require("../models/vendor.model.js")(sequelize, Sequelize);
      
      // User-Booking
      db.user.hasMany(db.booking, { foreignKey: 'user_id' });
      db.booking.belongsTo(db.user, { foreignKey: 'user_id' });
      
      module.exports = db;
