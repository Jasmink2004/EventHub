import { memo, useCallback } from 'react';

const EventCard = memo(({ event, onRegister }) => {
  const handleRegistration = useCallback(() => {
    onRegister(event._id);
  }, [event._id, onRegister]);

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <button onClick={handleRegistration}>
        Register
      </button>
    </div>
  );
});
