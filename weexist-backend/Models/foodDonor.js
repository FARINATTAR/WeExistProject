// const mongoose = require('mongoose');

// const foodItemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   quantity: { type: String, required: true },
//   expiryDate: { type: Date }
// });

// const foodDonorSchema = new mongoose.Schema({
//   donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'MasterDonor', required: true },
//   donationDate: { type: Date, default: Date.now },
//   pickupRequired: { type: Boolean, default: false },
//   pickupStatus: { 
//     type: String, 
//     enum: ['pending', 'scheduled', 'picked up', 'cancelled'], 
//     default: 'pending' 
//   },
//   foodItems: [foodItemSchema]
// });

// module.exports = mongoose.model('FoodDonor', foodDonorSchema);
