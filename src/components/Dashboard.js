import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events');
        setEvents(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="dashboard">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

