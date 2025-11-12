const controller = require("../controllers/review.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

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
