const express = require("express");
const cors = require("cors");
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();

const origins = process.env.ORIGINS ? process.env.ORIGINS.split(',') : [];
var corsOptions = {
  origin: origins
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.findOrCreate({
    where: { id: 1 },
    defaults: {
      name: "user"
    }
  });
 
  Role.findOrCreate({
    where: { id: 2 },
    defaults: {
      name: "moderator"
    }
  });
 
  Role.findOrCreate({
    where: { id: 3 },
    defaults: {
      name: "admin"
    }
  });
}
