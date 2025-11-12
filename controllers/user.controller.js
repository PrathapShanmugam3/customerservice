const db = require("../models");
const User = db.user;

const allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

const userBoard = (req, res) => {
  User.findByPk(req.userId).then(user => {
    res.status(200).send({
      message: `Welcome to the user board, ${user.name}!`
    });
  });
};

const adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

const moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

module.exports = {
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard
};
