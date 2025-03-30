import React, { useState } from 'react';
import axios from 'axios';
import Alert from '../components/Alert'; // Reusable Alert component
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(null); // Clear previous alerts
  
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token to local storage
        setAlert({ message: 'Login successful!', type: 'success' });
  
        // Redirect after success
        setTimeout(() => window.location.href = '/events', 2000);
      } else {
        throw new Error('Invalid server response');
      }
    } catch (error) {
      setAlert({
        message: error.response?.data?.message || 'Failed to log in. Please try again.',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="login-container">
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
