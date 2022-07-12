const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  port: 2525, // true for 465 for gmail,  false for other ports
  host: "smtp.mailtrap.io",
  auth: {
    user: process.env.username,
    pass: process.env.password,
  },
  secure: true,
});
