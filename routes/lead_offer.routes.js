const { authJwt } = require("../middleware");
const controller = require("../controllers/lead_offer.controller");

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
   * /api/offers:
   *   post:
   *     tags:
   *       - Lead Offers
   *     name: Send Offer
   *     summary: Sends an offer to a vendor
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: body
   *         name: offer
   *         description: The offer to send
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             leadId:
   *               type: string
   *             vendorId:
   *               type: string
   *     responses:
   *       '200':
   *         description: Offer sent successfully
   *       '401':
   *         description: Unauthorized
   *       '404':
   *         description: Lead or vendor not found
   *       '500':
   *         description: Internal server error
   */
  app.post("/api/offers", [authJwt.verifyToken, authJwt.isOperator], controller.sendOffer);

  /**
   * @swagger
   * /api/offers/{offerId}:
   *   put:
   *     tags:
   *       - Lead Offers
   *     name: Respond to Offer
   *     summary: Responds to an offer
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: offerId
   *         description: The ID of the offer to respond to
   *         required: true
   *         schema:
   *           type: string
   *       - in: body
   *         name: response
   *         description: The response to the offer
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             status:
   *               type: string
   *     responses:
   *       '200':
   *         description: Offer response recorded successfully
   *       '401':
   *         description: Unauthorized
   *       '404':
   *         description: Offer not found
   *       '500':
   *         description: Internal server error
   */
  app.put("/api/offers/:offerId", [authJwt.verifyToken, authJwt.isVendor], controller.respondToOffer);
};
