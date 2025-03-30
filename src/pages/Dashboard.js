import React from 'react';

const Dashboard = ({ events }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {events.map(event => (
        <div key={event._id}>{event.title}</div>
      ))}
    </div>
  );
};

export default Dashboard;

