const db = require("../models");
const Vendor = db.vendor;

// Get matching vendors
exports.getMatchingVendors = (req, res) => {
  const { category, city, pincode } = req.query;

  Vendor.findAll({
    where: {
      service_category: category,
      city: city,
      pincode: pincode,
      is_active: true
    }
  })
    .then(vendors => {
      res.send(vendors);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
