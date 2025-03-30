import React from 'react';
import axios from 'axios';
import { useForm } from '../hooks/useForm';
import { emitEventUpdate } from '../utils/eventHub';

const EventForm = () => {
  const { values, handleChange } = useForm({ title: '', date: '', location: '' });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/events', values);
      emitEventUpdate({ id: res.data._id, type: 'new' });
      // Reset form or show success message
    } catch (error) {
      console.error('Error creating event:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        name="title"
        value={values.title}
        onChange={handleChange}
        placeholder="Event Title"
      />
      {/* Add other form fields */}
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
