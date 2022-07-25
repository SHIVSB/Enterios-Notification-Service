const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dotenv = require("dotenv");
const logger = require("morgan");
const PORT = process.env.NODE_ENV === "PRODUCTION" || 7777;
const dbConnect = require("./src/config/db.config");

dotenv.config();
require("./src/cron/cron");
app.use(logger("dev"));

dbConnect();

require("./src/routes/notification.route.js")(app);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`Server started successfully on port: ${PORT}`);
});
