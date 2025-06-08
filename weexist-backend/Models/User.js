// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   phone: {
//     type: String,
//   },

//   password: {
//     type: String,
//     required: true,
//   },

// role: {
//   type: String,
//   enum: ["admin", "volunteer"],
//   default: "volunteer",
//   required: true,
// },

//   gender: {
//     type: String,
//     enum: ["male", "female", "other"],
//   },

//   dateOfBirth: {
//     type: Date,
//   },

//   otp: {
//     type: String,
//   },

//   otpExpires: {
//     type: Date,
//   },

//   address: {
//     street: String,
//     area: String,
//     city: String,
//     state: String,
//     pincode: String,
//   },
//     isVerified: {
//     type: Boolean,
//     default: false,
// },

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: { type: String },
  quantity: { type: String },
  expiryDate: { type: Date }
}, { _id: false });

const donationInfoSchema = new mongoose.Schema({
  donorType: { type: String, enum: ['food', 'money', 'education'] },

  // For food donor
  foodItems: [foodItemSchema],
  pickupRequired: { type: Boolean },
  pickupStatus: { type: String, enum: ['pending', 'scheduled', 'picked up', 'cancelled'] },

  // For money donor
  amount: { type: Number },
  paymentMethod: { type: String },
  transactionId: { type: String },

  // For education donor
  childName: { type: String },
  childAge: { type: Number },
  educationLevel: { type: String, enum: ['primary', 'secondary', 'higher secondary', 'college'] },
  monthlyAmount: { type: Number },
  startDate: { type: Date },
  endDate: { type: Date },

  donationDate: { type: Date, default: Date.now }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["admin", "volunteer", "food_donor", "money_donor", "education_donor"],
    default: "volunteer",
    required: true,
  },

  gender: { type: String, enum: ["male", "female", "other"] },
  dateOfBirth: { type: Date },

  otp: { type: String },
  otpExpires: { type: Date },

  address: {
    street: String,
    area: String,
    city: String,
    state: String,
    pincode: String,
  },

  isVerified: { type: Boolean, default: false },

  donationInfo: donationInfoSchema,  // all donor-specific info here

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
