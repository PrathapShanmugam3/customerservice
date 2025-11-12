const controller = require("../controllers/booking.controller");

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
   * /api/bookings:
   *   post:
   *     tags:
   *       - Booking
   *     name: Create Booking
   *     summary: Creates a new booking
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               vendorId:
   *                 type: string
   *               serviceId:
   *                 type: string
   *               bookingDate:
   *                 type: string
   *                 format: date-time
   *     responses:
   *       '201':
   *         description: Booking created successfully
   */
  app.post("/api/bookings", controller.createBooking);

  /**
   * @swagger
   * /api/bookings/{id}/confirm:
   *   post:
   *     tags:
   *       - Booking
   *     name: Confirm Booking
   *     summary: Confirms a booking
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The booking ID
   *     responses:
   *       '200':
   *         description: Booking confirmed successfully
   */
  app.post("/api/bookings/:id/confirm", controller.confirmBooking);
};
