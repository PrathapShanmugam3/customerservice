const controller = require("../controllers/admin.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // List vendors needing verification
  app.get('/api/admin/vendors', controller.listPendingVendors);

  // Approve vendor
  app.post('/api/admin/vendors/:id/approve', controller.approveVendor);

  // Manual lead reassign
  app.post('/api/admin/leads/reassign', controller.reassignLead);
};
