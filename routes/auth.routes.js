const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

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
   * /api/auth/signup:
   *   post:
   *     tags:
   *       - Auth
   *     summary: Register a new user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *               roles:
   *                 type: array
   *                 items:
   *                   type: string
   *     responses:
   *       200:
   *         description: User was registered successfully!
   *       400:
   *         description: Bad request
   */
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  /**
   * @swagger
   * /api/auth/signin:
   *   post:
   *     tags:
   *       - Auth
   *     summary: Sign in
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: User signed in successfully!
   *       401:
   *         description: Invalid password
   *       404:
   *         description: User not found
   */
  app.post("/api/auth/signin", controller.signin);

  /**
   * @swagger
   * /api/auth/refreshtoken:
   *   post:
   *     tags:
   *       - Auth
   *     summary: Refresh token
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               refreshToken:
   *                 type: string
   *     responses:
   *       200:
   *         description: Token was refreshed successfully!
   *       403:
   *         description: Refresh token is not in database!
   */
  app.post("/api/auth/refreshtoken", controller.refreshToken);
};
