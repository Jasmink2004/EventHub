import React, { useState, useEffect } from 'react';
import { getEvents } from '../../services/api';
import EventCard from '../EventCard';

function List() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {events.map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default List;
