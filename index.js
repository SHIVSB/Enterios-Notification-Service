const express = require("express");
const app = express();
const dotenv = require("dotenv");
const logger = require("morgan");
const PORT = process.env.NODE_ENV === "PRODUCTION" || 6000;
const dbConnect = require("./src/config/db.config");

dotenv.config();
app.use(logger("dev"));

dbConnect();

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`Server started successfully on port: ${PORT}`);
});
