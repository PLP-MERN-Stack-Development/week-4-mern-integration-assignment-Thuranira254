const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  barber: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: String,
  date: Date,
  status: { type: String, enum: ['booked', 'completed', 'cancelled'], default: 'booked' }
});

module.exports = mongoose.model('Appointment', appointmentSchema);