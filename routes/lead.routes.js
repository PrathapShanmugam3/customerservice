const { authJwt } = require("../middleware");
const controller = require("../controllers/lead.controller");

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
   * /api/leads:
   *   post:
   *     tags:
   *       - Leads
   *     name: Create Lead
   *     summary: Creates a new lead
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: body
   *         name: lead
   *         description: The lead to create
   *         required: true
   *         schema:
   *           type: object
   *     responses:
   *       '200':
   *         description: Lead created successfully
   *       '401':
   *         description: Unauthorized
   *       '500':
   *         description: Internal server error
   */
  app.post("/api/leads", [authJwt.verifyToken, authJwt.isOperator], controller.createLead);

  /**
   * @swagger
   * /api/leads/{leadId}/confirm:
   *   put:
   *     tags:
   *       - Leads
   *     name: Confirm Booking
   *     summary: Confirms a booking for a lead
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: leadId
   *         description: The ID of the lead to confirm
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: Booking confirmed successfully
   *       '401':
   *         description: Unauthorized
   *       '404':
   *         description: Lead not found
   *       '500':
   *         description: Internal server error
   */
  app.put("/api/leads/:leadId/confirm", [authJwt.verifyToken, authJwt.isOperator], controller.confirmBooking);

  /**
   * @swagger
   * /api/leads/{leadId}/complete:
   *   put:
   *     tags:
   *       - Leads
   *     name: Complete Lead
   *     summary: Marks a lead as complete
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: leadId
   *         description: The ID of the lead to complete
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: Lead completed successfully
   *       '401':
   *         description: Unauthorized
   *       '404':
   *         description: Lead not found
   *       '500':
   *         description: Internal server error
   */
  app.put("/api/leads/:leadId/complete", [authJwt.verifyToken, authJwt.isOperator], controller.completeLead);
};
