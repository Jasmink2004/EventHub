import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        
        setEvents(response.data); // Set fetched events
        
        console.log('Fetched Events:', response.data); // Debug fetched events
      } catch (error) {
        setError('Failed to fetch events. Please try again later.');
        
        console.error('Fetch Events Error:', error); // Debug errors
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchEvents();
  }, []);
  

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="event-grid">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <p>No events available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Events;
