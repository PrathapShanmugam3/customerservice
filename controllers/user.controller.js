const db = require("../models");
const User = db.user;

// Example of a protected route
exports.userBoard = (req, res) => {
  User.findByPk(req.userId).then(user => {
    res.status(200).send({
      message: `Welcome to the user board, ${user.name}!`
    });
  });
};
