const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  /**
   * @swagger
   * /api/auth/signup:
   *   post:
   *     tags:
   *       - Auth
   *     name: Signup
   *     summary: Creates a new user
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
   *     responses:
   *       '201':
   *         description: User created successfully
   *       '400':
   *         description: Bad request
   */
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateEmail
    ],
    controller.signup
  );

  /**
   * @swagger
   * /api/auth/signin:
   *   post:
   *     tags:
   *       - Auth
   *     name: Signin
   *     summary: Logs in a user
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
   *       '200':
   *         description: User logged in successfully
   *       '401':
   *         description: Unauthorized
   */
  app.post("/api/auth/signin", controller.signin);
};
