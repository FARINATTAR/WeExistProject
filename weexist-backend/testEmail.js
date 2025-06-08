import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

async function testEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email from Nodemailer",
      text: "This is a test email to verify your configuration.",
    });
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error.message || error);
  }
}

testEmail();
