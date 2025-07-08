const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find().populate('client barber');
  res.json(appointments);
});

// Book an appointment
router.post('/', async (req, res) => {
  const { client, barber, service, date } = req.body;
  const appointment = new Appointment({ client, barber, service, date });
  await appointment.save();
  res.status(201).json(appointment);
});

module.exports = router;