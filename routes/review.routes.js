const { authJwt } = require("../middleware");
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
   *       - Reviews
   *     name: Create Review
   *     summary: Creates a new review
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: body
   *         name: review
   *         description: The review to create
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             leadId:
   *               type: string
   *             rating:
   *               type: integer
   *             comment:
   *               type: string
   *     responses:
   *       '200':
   *         description: Review created successfully
   *       '401':
   *         description: Unauthorized
   *       '404':
   *         description: Lead not found
   *       '500':
   *         description: Internal server error
   */
  app.post("/api/reviews", [authJwt.verifyToken, authJwt.isCustomer], controller.createReview);
};
