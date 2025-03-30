import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EventForm() {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', eventData);
      navigate('/');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>Create New Event</h2>
      <input type="text" name="title" placeholder="Event Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Event Description" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Event Location" onChange={handleChange} required />
      <input type="number" name="capacity" placeholder="Capacity" onChange={handleChange} required />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
