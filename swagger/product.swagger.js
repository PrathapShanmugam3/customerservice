
/**
 * @swagger
 * /api/products/add-voice:
 *   post:
 *     summary: Add a product using a voice transcript
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transcript:
 *                 type: string
 *                 description: The voice transcript of the product to add.
 *                 example: "add three tomatoes for 5 dollars"
 *     responses:
 *       "200":
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product added"
 *       "400":
 *         description: Unable to parse product details from the transcript
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unable to parse product details"
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */
