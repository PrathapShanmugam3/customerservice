const { authJwt } = require("../middleware");
const controller = require("../controllers/vendor.controller");

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
   * /api/vendors/matching:
   *   get:
   *     tags:
   *       - Vendors
   *     name: Get Matching Vendors
   *     summary: Retrieves vendors that match the lead's criteria
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: query
   *         name: leadId
   *         description: The ID of the lead to match vendors for
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: Matching vendors retrieved successfully
   *       '401':
   *         description: Unauthorized
   *       '404':
   *         description: Lead not found
   *       '500':
   *         description: Internal server error
   */
  app.get("/api/vendors/matching", [authJwt.verifyToken, authJwt.isOperator], controller.getMatchingVendors);
};
