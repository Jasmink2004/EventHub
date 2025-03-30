import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import { useEventUpdateListener } from './utils/eventHub';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import EventForm from './components/EventForm';
import Navigation from './components/Navigation';

const App = () => {
  const { user } = useAuth();

  useEventUpdateListener((event) => {
    if (event.type === 'update' && user?.role === 'admin') {
      // Implement admin-specific refresh logic
      console.log('Admin update received:', event);
    }
  });

  return (
    <EventProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-event" element={<EventForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
