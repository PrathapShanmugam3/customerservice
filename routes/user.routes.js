const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  /**
   * @swagger
   * /api/test/all:
   *   get:
   *     tags:
   *       - User
   *     name: All Access
   *     summary: Returns a public content
   *     responses:
   *       '200':
   *         description: Public content returned successfully
   */
  app.get("/api/test/all", controller.allAccess);

  /**
   * @swagger
   * /api/test/user:
   *   get:
   *     tags:
   *       - User
   *     name: User Board
   *     summary: Returns user content
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       '200':
   *         description: User content returned successfully
   *       '401':
   *         description: Unauthorized
   */
  app.get("/api/test/user", controller.userBoard);

  /**
   * @swagger
   * /api/test/mod:
   *   get:
   *     tags:
   *       - User
   *     name: Moderator Board
   *     summary: Returns moderator content
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       '200':
   *         description: Moderator content returned successfully
   *       '401':
   *         description: Unauthorized
   *       '403':
   *         description: Forbidden
   */
  app.get(
    "/api/test/mod",
    controller.moderatorBoard
  );

  /**
   * @swagger
   * /api/test/admin:
   *   get:
   *     tags:
   *       - User
   *     name: Admin Board
   *     summary: Returns admin content
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       '200':
   *         description: Admin content returned successfully
   *       '401':
   *         description: Unauthorized
   *       '403':
   *         description: Forbidden
   */
  app.get(
    "/api/test/admin",
    controller.adminBoard
  );
};
