const controller = require("../controllers/shadowotp.controller");

module.exports = function(app) {
  app.post("/v1/apps", controller.createApp);
  app.post("/v1/register-device", controller.registerDevice);
  app.post("/v1/request-challenge", controller.requestChallenge);
  app.post("/v1/verify-challenge", controller.verifyChallenge);
  app.post("/v1/devices/revoke", controller.revokeDevice);
  app.post("/v1/keys/rotate", controller.rotateKey);
};
