// import nodemailer from "nodemailer";

// const sendOTP = async (toEmail, otp) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // or another
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: toEmail,
//     subject: "Your OTP for WeExist Registration",
//     text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
//   };

//   await transporter.sendMail(mailOptions);
// };

// export default sendOTP;

// const sendOTP = async (toEmail, otp) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: toEmail,
//     subject: "Your OTP for WeExist Registration",
//     text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);
//   } catch (error) {
//     console.error("Error sending email:", error.message || error);
//     throw error; // rethrow to catch in controller
//   }
// };


// export default sendOTP;
const sendOTP = async (toEmail, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: "Your OTP for WeExist Registration",
      text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:");
    console.error(error); // This logs full stack trace
    throw new Error("Failed to send OTP: " + error.message);
  }
};
export default sendOTP;
