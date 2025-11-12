const db = require("../models");
const Review = db.review;

exports.createReview = (req, res) => {
  Review.create({
    booking_id: req.body.booking_id,
    rating: req.body.rating,
    comment: req.body.comment
  })
    .then(review => {
      res.status(201).send(review);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
