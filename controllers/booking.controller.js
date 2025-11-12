const db = require("../models");
const Booking = db.booking;

exports.getBookings = (req, res) => {
  Booking.findAll({
    where: { user_id: req.userId }
  })
    .then(bookings => {
      res.status(200).send(bookings);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createBooking = (req, res) => {
  Booking.create({
    user_id: req.userId,
    vendor_id: req.body.vendor_id,
    service_id: req.body.service_id,
    booking_date: req.body.booking_date,
    status: 'pending'
  })
    .then(booking => {
      res.status(201).send(booking);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateBooking = (req, res) => {
  Booking.update(req.body, {
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Booking was updated successfully." });
      } else {
        res.send({ message: `Cannot update Booking with id=${req.params.id}. Maybe Booking was not found or req.body is empty!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating Booking with id=" + req.params.id });
    });
};

exports.confirmBooking = (req, res) => {
  Booking.update({ status: 'confirmed' }, {
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Booking was confirmed successfully." });
      } else {
        res.send({ message: `Cannot confirm Booking with id=${req.params.id}. Maybe Booking was not found!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error confirming Booking with id=" + req.params.id });
    });
};
