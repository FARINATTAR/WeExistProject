// const mongoose = require('mongoose');

// const educationDonorSchema = new mongoose.Schema({
//   donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'MasterDonor', required: true },
//   childName: { type: String, required: true },
//   childAge: { type: Number, min: 0 },
//   educationLevel: { type: String, enum: ['primary', 'secondary', 'higher secondary', 'college'], required: true },
//   monthlyAmount: { type: Number, required: true, min: 0 },
//   startDate: { type: Date, required: true },
//   endDate: { type: Date },
//   donationDate: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('EducationDonor', educationDonorSchema);
