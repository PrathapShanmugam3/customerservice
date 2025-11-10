
module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    rating: {
      type: Sequelize.SMALLINT
    },
    comment: {
      type: Sequelize.TEXT
    }
  });

  return Review;
};
