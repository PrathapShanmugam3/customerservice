const { customDataGetData } = require('../customdata/getdata');

module.exports = function(app) {
  /**
   * @swagger
   * /api/customdata/getdata:
   *   post:
   *     tags:
   *       - Custom Data
   *     name: Get Custom Data
   *     summary: Retrieves custom data based on the provided query
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: query
   *         description: The query to filter the custom data
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             dataType:
   *               type: string
   *             match:
   *               type: object
   *     responses:
   *       '200':
   *         description: Custom data retrieved successfully
   *       '400':
   *         description: Bad request
   *       '500':
   *         description: Internal server error
   */
  app.post('/api/customdata/getdata', customDataGetData);
};
