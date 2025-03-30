import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <br>
        </br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Welcome to EventHub</h1>
        <p>Discover and create amazing events in your area</p>
        <Link to="/events" className="btn btn-primary">Explore Events</Link>
      </header>
      <section className="features">
        <div className="feature">
          <i className="fas fa-calendar-alt"></i>
          <h3>Find Events</h3>
          <p>Discover exciting events happening near you</p>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <h3>Connect</h3>
          <p>Meet new people and expand your network</p>
        </div>
        <div className="feature">
          <i className="fas fa-star"></i>
          <h3>Create Events</h3>
          <p>Host your own events and share your passions</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
