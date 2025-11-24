
const express = require('express');
const router = express.Router();
const db = require("../models");

// These are dummy NLP functions. You will need to implement them.
const extractName = (transcript) => "dummy product";
const extractPrice = (transcript) => 10;
const extractQuantity = (transcript) => 1;

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
router.post('/add-voice', async (req, res) => {
  const { transcript } = req.body;
  // NLP functions: extractName, extractPrice, extractQuantity
  const name = extractName(transcript);
  const price = extractPrice(transcript);
  const qty = extractQuantity(transcript) || 1;
  if (!name || !price) {
    return res.status(400).json({ message: "Unable to parse product details" });
  }
  await db.sequelize.query("INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)", { replacements: [name, price, qty] });
  res.json({ message: "Product added" });
});

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

module.exports = router;
