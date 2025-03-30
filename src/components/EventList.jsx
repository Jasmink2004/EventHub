import React from 'react';
import axios from 'axios';
import { useEvents } from '../context/EventContext';
import { useEventUpdateListener } from '../utils/eventHub';

const EventList = () => {
  const { events, dispatch } = useEvents();
  
  useEventUpdateListener(({ id, type }) => {
    if (type === 'new') {
      // Fetch latest event
      axios.get(`/api/events/${id}`)
        .then(res => dispatch({ type: 'ADD_EVENT', payload: res.data }));
    }
  });

  return (
    <div>
      {/* Render events */}
      {events.map(event => (
        <div key={event._id}>{event.title}</div>
      ))}
    </div>
  );
};

export default EventList;
