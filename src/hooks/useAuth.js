import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (credentials) => {
    const { data } = await axios.post('/api/auth/login', credentials);
    localStorage.setItem('token', data.token);
    setUser(data.user);
  }, []);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const { data } = await axios.get('/api/auth/verify');
        setUser(data.user);
      } catch (err) {
        localStorage.removeItem('token');
      }
      setLoading(false);
    };
    verifyToken();
  }, []);

  return { user, loading, login };
};
