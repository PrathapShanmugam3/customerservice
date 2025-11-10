const db = require("../models");
const LeadOffer = db.lead_offer;

// Send an offer to a vendor
exports.sendOffer = (req, res) => {
  const { leadId, vendorIds } = req.body;

  const offers = vendorIds.map(vendorId => ({
    lead_id: leadId,
    vendor_id: vendorId
  }));

  LeadOffer.bulkCreate(offers)
    .then(() => {
      // Here you would trigger SMS/WhatsApp/call notifications to the vendors
      res.send({ message: "Offers sent." });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Respond to an offer
exports.respondToOffer = (req, res) => {
  const { offerId } = req.params;
  const { status, price } = req.body;

  LeadOffer.findByPk(offerId)
    .then(offer => {
      if (!offer) {
        return res.status(404).send({ message: "Offer not found." });
      }

      offer.update({ status, price, responded_at: new Date() })
        .then(() => {
          res.send({ message: "Offer updated." });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
