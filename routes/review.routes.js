const controller = require("../controllers/review.controller");

module.exports = function(app) {
  /**
   * @swagger
   * /api/reviews:
   *   post:
   *     tags:
   *       - Review
   *     name: Create Review
   *     summary: Creates a new review
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               bookingId:
   *                 type: string
   *               rating:
   *                 type: number
   *               comment:
   *                 type: string
   *     responses:
   *       '201':
   *         description: Review created successfully
   */
  app.post("/api/reviews", controller.createReview);
};
