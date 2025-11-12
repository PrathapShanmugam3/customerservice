const controller = require("../controllers/admin.controller");

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
   * /api/admin/vendors:
   *   get:
   *     tags:
   *       - Admin
   *     name: List Pending Vendors
   *     summary: Retrieves a list of vendors pending verification
   *     responses:
   *       '200':
   *         description: A list of pending vendors
   */
  app.get('/api/admin/vendors', controller.listPendingVendors);

  /**
   * @swagger
   * /api/admin/vendors/{id}/approve:
   *   post:
   *     tags:
   *       - Admin
   *     name: Approve Vendor
   *     summary: Approves a vendor
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The vendor ID
   *     responses:
   *       '200':
   *         description: Vendor approved successfully
   */
  app.post('/api/admin/vendors/:id/approve', controller.approveVendor);

  /**
   * @swagger
   * /api/admin/leads/reassign:
   *   post:
   *     tags:
   *       - Admin
   *     name: Reassign Lead
   *     summary: Manually reassigns a lead to a new vendor
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               leadId:
   *                 type: string
   *               vendorId:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Lead reassigned successfully
   */
  app.post('/api/admin/leads/reassign', controller.reassignLead);
};
