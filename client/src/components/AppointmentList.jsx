import React, { useEffect, useState } from 'react';
import { getAppointments } from '../services/api';

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then(setAppointments);
  }, []);

  return (
    <ul>
      {appointments.map(a => (
        <li key={a._id}>
          {a.service} with {a.barber?.name} for {a.client?.name} on {new Date(a.date).toLocaleString()}
        </li>
      ))}
    </ul>
  );
}