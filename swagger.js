const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bezkoder Express API with Swagger',
      version: '1.0.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

module.exports = specs;