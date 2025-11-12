const controller = require("../controllers/service.controller");

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
   * /api/services:
   *   get:
   *     tags:
   *       - Service
   *     name: Get Services
   *     summary: Retrieves all services
   *     responses:
   *       '200':
   *         description: Services retrieved successfully
   */
  app.get("/api/services", controller.getServices);

  /**
   * @swagger
   * /api/services:
   *   post:
   *     tags:
   *       - Service
   *     name: Create Service
   *     summary: Creates a new service
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               description:
   *                 type: string
   *               price:
   *                 type: number
   *     responses:
   *       '201':
   *         description: Service created successfully
   */
  app.post("/api/services", controller.createService);
};
