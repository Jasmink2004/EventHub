import React from 'react';

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-details">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
}

export default EventCard;
