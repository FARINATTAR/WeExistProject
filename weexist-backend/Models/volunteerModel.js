import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String },
  availability: { type: String, required: true },
  skills: [{ type: String }], // array of strings
  location: {
    city: { type: String },
    state: { type: String }
  },
  profilePicture: { type: String }, // for later
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
