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
   *       - Authentication
   *     name: Signup
   *     summary: Creates a new user account
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: user
   *         description: User object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             username:
   *               type: string
   *             email:
   *               type: string
   *             password:
   *               type: string
   *             roles:
   *               type: array
   *               items:
   *                 type: string
   *     responses:
   *       '200':
   *         description: User registered successfully
   *       '400':
   *         description: Bad request
   *       '500':
   *         description: Internal server error
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
   *       - Authentication
   *     name: Signin
   *     summary: Logs in a user
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: user
   *         description: User object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             username:
   *               type: string
   *             password:
   *               type: string
   *     responses:
   *       '200':
   *         description: User logged in successfully
   *       '401':
   *         description: Invalid password
   *       '404':
   *         description: User not found
   *       '500':
   *         description: Internal server error
   */
  app.post("/api/auth/signin", controller.signin);
};
