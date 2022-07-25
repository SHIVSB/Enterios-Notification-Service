const notificationController = require("../controllers/enteriosNotification.controller");
//const { authJwt, verifyTicketRequestBody } = require("../middlewares");

module.exports = function (app) {
  app.post(
    "/notifServ/api/v1/notifications",
    notificationController.acceptNotificationRequest
  );
  app.get(
    "/notifServ/api/v1/notifications/:id",
    notificationController.getNotificationStatus
  );
};
