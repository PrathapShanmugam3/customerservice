const db = require("../models");
const Review = db.review;

// Create a new review
exports.createReview = (req, res) => {
  const { leadId, vendorId, rating, comment } = req.body;

  Review.create({
    lead_id: leadId,
    vendor_id: vendorId,
    rating: rating,
    comment: comment
  })
    .then(review => {
      res.status(201).send({ reviewId: review.id, message: "Review created" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
