require('mysql2');
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const specs = require('../swagger');

const app = express();

const origins = process.env.ORIGINS ? process.env.ORIGINS.split(',') : [];
var corsOptions = {
  origin: origins
};

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
        customJs: [
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js',
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js',
        ],
    })
);

const db = require("../models");
const Role = db.role;

db.sequelize.sync().then(() => {
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to grocery application." });
});

// routes
require('../routes/auth.routes')(app);
require('../routes/user.routes')(app);
require('../routes/review.routes')(app);
require('../routes/booking.routes')(app);
require('../routes/service.routes')(app);
require('../routes/shadowotp.routes')(app);
require('../routes/admin.routes.js')(app);
require('../routes/customdata.routes.js')(app);
require('../routes/search.routes.js')(app);
require('../routes/vendor.routes.js')(app);

app.post('/api/products/add-voice', async (req, res) => {
  const { transcript } = req.body;
  // NLP functions: extractName, extractPrice, extractQuantity
  const name = extractName(transcript);
  const price = extractPrice(transcript);
  const qty = extractQuantity(transcript) || 1;
  if (!name || !price) {
    return res.status(400).json({ message: "Unable to parse product details" });
  }
  await db.query("INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)", [name, price, qty]);
  res.json({ message: "Product added" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.findOrCreate({ where: { id: 1 }, defaults: { name: "customer" } });
  Role.findOrCreate({ where: { id: 2 }, defaults: { name: "operator" } });
  Role.findOrCreate({ where: { id: 3 }, defaults: { name: "vendor" } });
  Role.findOrCreate({ where: { id: 4 }, defaults: { name: "admin" } });
}
