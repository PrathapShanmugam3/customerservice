/**
 * @swagger
 * tags:
 *   name: ShadowOTP
 *   description: Device-generated authentication
 */

/**
 * @swagger
 * /v1/apps:
 *   post:
 *     summary: Create a new application
 *     tags: [ShadowOTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: The app was successfully created
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /v1/register-device:
 *   post:
 *     summary: Register a new device
 *     tags: [ShadowOTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               metadata:
 *                 type: object
 *               publicKey:
 *                 type: string
 *               algorithm:
 *                 type: string
 *     responses:
 *       201:
 *         description: The device was successfully registered
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /v1/request-challenge:
 *   post:
 *     summary: Request a challenge for a device
 *     tags: [ShadowOTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                 type: string
 *     responses:
 *       200:
 *         description: The challenge was successfully created
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /v1/verify-challenge:
 *   post:
 *     summary: Verify a challenge
 *     tags: [ShadowOTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                 type: string
 *               challenge:
 *                 type: string
 *               signature:
 *                 type: string
 *     responses:
 *       200:
 *         description: The challenge was successfully verified
 *       401:
 *         description: Invalid signature
 */

/**
 * @swagger
 * /v1/devices/revoke:
 *   post:
 *     summary: Revoke a device
 *     tags: [ShadowOTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                 type: string
 *     responses:
 *       200:
 *         description: The device was successfully revoked
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /v1/keys/rotate:
 *   post:
 *     summary: Rotate a key
 *     tags: [ShadowOTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                 type: string
 *               newPublicKey:
 *                 type: string
 *               newAlgorithm:
 *                 type: string
 *     responses:
 *       200:
 *         description: The key was successfully rotated
 *       400:
 *         description: Bad request
 */
