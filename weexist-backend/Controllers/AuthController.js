// import User from '../Models/User.js';
// import bcrypt from 'bcryptjs';
// import crypto from 'crypto';
// import sendOTP from '../utils/sendOtp.js'; // You'll define this to send email
// import jwt from 'jsonwebtoken';
// import mongoose from 'mongoose';


// export const registerUser = async (req, res) => {
//   const session = await mongoose.startSession();

//   try {
//     const {
//       name,
//       email,
//       phone,
//       password,
//       gender,
//       dateOfBirth,
//       address,
//       role = "volunteer",
//     } = req.body;

//     console.log("Checking existing user...");
//     const existingUser = await User.findOne({ email });

//     if (existingUser && existingUser.isVerified) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     if (existingUser && !existingUser.isVerified) {
//       console.log("Deleting old unverified user...");
//       await User.deleteOne({ _id: existingUser._id });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

//     session.startTransaction();

//     const newUser = new User({
//       name,
//       email,
//       phone,
//       password: hashedPassword,
//       gender,
//       dateOfBirth,
//       role,
//       address,
//       otp,
//       otpExpires,
//       isVerified: false,
//     });

//     console.log("Saving new user...");
//     await newUser.save({ session });

//     try {
//       console.log("Sending OTP...");
//       await sendOTP(email, otp);
//     } catch (err) {
//       console.error("OTP sending failed:", err);
//       await session.abortTransaction();
//       session.endSession();
//       return res.status(500).json({ message: "Failed to send OTP" });
//     }

//     console.log("Committing transaction...");
//     await session.commitTransaction();
//     session.endSession();

//     res.status(201).json({ message: "OTP sent to email. Verify to activate account." });

//   } catch (error) {
//     console.error("Register error:", error);
//     await session.abortTransaction();
//     session.endSession();
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const verifyOTP = async (req, res) => {
//   try {
//     const { email, otp } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     if (user.isVerified) return res.status(400).json({ message: "User already verified" });

//     if (user.otp !== otp || user.otpExpires < Date.now()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.isVerified = true;
//     user.otp = undefined;
//     user.otpExpires = undefined;

//     await user.save();

//     res.status(200).json({ message: "OTP verified. Account activated." });
//   } catch (error) {
//     console.error("Verify OTP error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const resendOTP = async (req, res) => {
//   try {
//     const { email } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     if (user.isVerified) return res.status(400).json({ message: "User already verified" });

//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     const newOtpExpires = new Date(Date.now() + 10 * 60 * 1000);

//     user.otp = newOtp;
//     user.otpExpires = newOtpExpires;
//     await user.save();

//     await sendOTP(email, newOtp);

//     res.status(200).json({ message: "New OTP sent" });
//   } catch (error) {
//     console.error("Resend OTP error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     if (!user.isVerified) return res.status(403).json({ message: "Please verify your account" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign(
//       {
//         userId: user._id,
//         role: user.role,
//         email: user.email,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

import User from '../Models/User.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import sendOTP from '../utils/sendOtp.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

// REGISTER
export const registerUser = async (req, res) => {
  const session = await mongoose.startSession();
  let transactionStarted = false;

  try {
    const {
      name,
      email,
      phone,
      password,
      gender,
      dateOfBirth,
      address,
      role = "volunteer",
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.isVerified) {
      session.endSession();
      return res.status(400).json({ message: "User already exists" });
    }

    if (existingUser && !existingUser.isVerified) {
      await User.deleteOne({ _id: existingUser._id });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    session.startTransaction();
    transactionStarted = true;

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      gender,
      dateOfBirth,
      role,
      address,
      otp,
      otpExpires,
      isVerified: false,
    });

    await newUser.save({ session });

    try {
      await sendOTP(email, otp);
    } catch (err) {
      if (transactionStarted) {
        await session.abortTransaction();
      }
      session.endSession();
      return res.status(500).json({ message: "Failed to send OTP" });
    }

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: "OTP sent to email. Verify to activate account." });

  } catch (error) {
    if (transactionStarted) {
      await session.abortTransaction();
    }
    session.endSession();
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// VERIFY OTP
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.isVerified) return res.status(400).json({ message: "User already verified" });

    if (user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.status(200).json({ message: "OTP verified. Account activated." });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// RESEND OTP
export const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.isVerified) return res.status(400).json({ message: "User already verified" });

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const newOtpExpires = new Date(Date.now() + 10 * 60 * 1000);

    user.otp = newOtp;
    user.otpExpires = newOtpExpires;
    await user.save();

    await sendOTP(email, newOtp);

    res.status(200).json({ message: "New OTP sent" });
  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.isVerified) return res.status(403).json({ message: "Please verify your account" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
