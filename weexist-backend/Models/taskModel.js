import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: {
    city: String,
    state: String,
  },
  date: Date,
  contactInfo: String,
  status: {
    type: String,
    enum: ['open', 'assigned', 'completed'],
    default: 'open',
  },
  volunteerName: String,
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
