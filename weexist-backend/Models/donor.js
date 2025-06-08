// const mongoose = require('mongoose');

// const masterDonorSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, lowercase: true, unique: true },
//   phone: { type: String },
//   address: { type: String },

//   password: { type: String, required: true },  // store hashed password

//   otp: { type: String },                       // one-time password for verification
//   otpExpiry: { type: Date },                   // OTP expiration datetime

//   donorType: { type: String, required: true, enum: ['money', 'food', 'education'] }
// }, { timestamps: true });

// module.exports = mongoose.model('MasterDonor', masterDonorSchema);
