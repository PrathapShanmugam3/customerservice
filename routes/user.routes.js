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
   *     summary: Public content
   *     responses:
   *       '200':
   *         description: Public content
   */
  app.get("/api/test/all", controller.allAccess);

  /**
   * @swagger
   * /api/test/user:
   *   get:
   *     tags:
   *       - User
   *     name: User Board
   *     summary: User content
   *     responses:
   *       '200':
   *         description: User content
   */
  app.get("/api/test/user", controller.userBoard);

  /**
   * @swagger
   * /api/test/mod:
   *   get:
   *     tags:
   *       - User
   *     name: Moderator Board
   *     summary: Moderator content
   *     responses:
   *       '200':
   *         description: Moderator content
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
   *     summary: Admin content
   *     responses:
   *       '200':
   *         description: Admin content
   */
  app.get(
    "/api/test/admin",
    controller.adminBoard
  );
};
