const controller = require("../controllers/service.controller");

module.exports = function(app) {
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
