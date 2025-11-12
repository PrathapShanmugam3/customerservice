const db = require("../models");
const Service = db.service;

exports.getServices = (req, res) => {
  Service.findAll()
    .then(services => {
      res.status(200).send(services);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createService = (req, res) => {
  Service.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  })
    .then(service => {
      res.status(201).send(service);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
