const controller = require("../controllers/search.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // List vendors
  app.get('/api/search/vendors', controller.searchVendors);
};
