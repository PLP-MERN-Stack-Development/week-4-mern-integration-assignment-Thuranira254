import React, { useState } from 'react';
import { bookAppointment } from '../services/api';

export default function BookAppointment() {
  const [form, setForm] = useState({ client: '', barber: '', service: '', date: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await bookAppointment(form);
    alert('Appointment booked!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="client" placeholder="Client ID" onChange={handleChange} required />
      <input name="barber" placeholder="Barber ID" onChange={handleChange} required />
      <input name="service" placeholder="Service" onChange={handleChange} required />
      <input name="date" type="datetime-local" onChange={handleChange} required />
      <button type="submit">Book</button>
    </form>
  );
}