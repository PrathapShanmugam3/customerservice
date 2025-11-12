const controller = require("../controllers/booking.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/bookings", controller.getBookings);
  app.post("/api/bookings", controller.createBooking);
  app.put("/api/bookings/:id", controller.updateBooking);
};
