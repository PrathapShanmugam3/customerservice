const controller = require("../controllers/search.controller");

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
   * /api/search/vendors:
   *   get:
   *     tags:
   *       - Search
   *     name: Search Vendors
   *     summary: Searches for vendors based on a query
   *     parameters:
   *       - in: query
   *         name: q
   *         schema:
   *           type: string
   *         required: true
   *         description: The search query
   *     responses:
   *       '200':
   *         description: A list of vendors matching the search query
   */
  app.get('/api/search/vendors', controller.searchVendors);
};
