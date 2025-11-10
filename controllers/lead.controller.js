const db = require("../models");
const Lead = db.lead;

// Create a new lead
exports.createLead = (req, res) => {
  const { customerName, customerPhone, serviceCategory, city, pincode, address, preferredDate, preferredTime, details } = req.body;

  Lead.create({
    customer_name: customerName,
    customer_phone: customerPhone,
    service_category: serviceCategory,
    city: city,
    pincode: pincode,
    address: address,
    preferred_date: preferredDate,
    preferred_time: preferredTime,
    details: details,
    created_by: req.userId
  })
    .then(lead => {
      res.status(201).send({ statusCode: 0, leadId: lead.id, message: "Lead created" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Confirm a booking
exports.confirmBooking = (req, res) => {
  const { leadId } = req.params;
  const { vendorId } = req.body;

  Lead.findByPk(leadId)
    .then(lead => {
      if (!lead) {
        return res.status(404).send({ message: "Lead not found." });
      }

      lead.update({ status: 'assigned', vendor_id: vendorId })
        .then(() => {
          res.send({ message: "Booking confirmed." });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Complete a lead and process payment
exports.completeLead = (req, res) => {
  const { leadId } = req.params;
  const { amount, paymentMode, actualPaidToVendor } = req.body;

  Lead.findByPk(leadId)
    .then(lead => {
      if (!lead) {
        return res.status(404).send({ message: "Lead not found." });
      }

      lead.update({ status: 'completed' })
        .then(() => {
          // Here you would integrate with a payment gateway and create a transaction record
          res.send({ message: "Lead completed." });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
