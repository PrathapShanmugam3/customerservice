module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("reviews", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'bookings',
        key: 'id'
      }
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    comment: {
      type: Sequelize.TEXT
    }
  });

  return Review;
};
