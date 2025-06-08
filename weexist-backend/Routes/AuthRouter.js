import express from 'express';
import {
  registerUser,
  verifyOTP,
  resendOTP,
  loginUser
} from '../Controllers/AuthController.js';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register user and send OTP
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/auth/verify-otp
// @desc    Verify OTP and activate account
// @access  Public
router.post('/verify-otp', VerifyOTP);

// @route   POST /api/auth/resend-otp
// @desc    Resend OTP to user email
// @access  Public
router.post('/resend-otp', resendOTP);

// @route   POST /api/auth/login
// @desc    Login user after OTP verification
// @access  Public
router.post('/login', loginUser);

export default router;