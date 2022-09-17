import nodemailer from "nodemailer";
import { google } from "googleapis";
import "dotenv/config.js";
import cron from "node-cron";
import EmailModal from "../modals/email.js";


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const getTransport = async () => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.AUTHORISED_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    return transport;
  } catch (error) {
    return error;
  }
};

const getDate = (date) => {
  const dateText = date;
  const newDate = new Date(dateText);
  return newDate;
};

const SendMail = () => {
  getTransport()
    .then((transport) => {
      EmailModal.find({})
        .then((allMails) => {
          for (let mail of allMails) {
            if (
              Date.now() >= getDate(mail.start_time) &&
              mail.email_sent === false
            ) {
              const mailOptions = {
                from: mail.from,
                to: mail.to,
                subject: mail.subject,
                text: mail.text,
              };

              transport.sendMail(mailOptions).then(() =>
                EmailModal.findByIdAndUpdate(mail._id, {
                  $set: { email_sent: true },
                })
              );
            }
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

export default SendMail;
