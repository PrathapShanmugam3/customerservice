
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerOptions: {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
  },
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Grocery Express API with Swagger',
      version: '1.0.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: 'https://customerservice-mocha.vercel.app',
      },
    ],
  },
  apis: ['./routes/*.js', './swagger/*.js'], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

module.exports = specs;
