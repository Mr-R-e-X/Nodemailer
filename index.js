// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  // Write your code here
  const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  userInput.question("Enter mail address:\n", (mailAddress) => {
    userInput.question("Enter mail subject:\n", (subject) => {
      userInput.question("Enter mail body:\n", (body) => {
        const mailOptions = {
          from: "codingninjas2k16@gmail.com",
          to: mailAddress,
          subject: subject,
          text: body,
        };
        console.log("mailOptions", mailOptions);
        sendMailFunc(mailOptions, transporter);
      });
    });
  });
};

function sendMailFunc(mailOpts, transporter) {
  try {
    transporter.sendMail(mailOpts, (err, info) => {
      if (err) {
        console.log("Error sending mail: " + err);
      } else {
        console.log("Mail sent successfully: " + info.response);
      }
    });
  } catch (error) {
    console.log("Error in sending mail: " + error);
  }
}

export default Solution;
