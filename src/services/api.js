import axios from 'axios';

const API_URL = '/api';

export const login = (email, password) => axios.post(`${API_URL}/auth/login`, { email, password });
export const register = (username, email, password) => axios.post(`${API_URL}/auth/register`, { username, email, password });
export const getEvents = () => axios.get(`${API_URL}/events`);
export const createEvent = (eventData) => axios.post(`${API_URL}/events`, eventData);
export const registerForEvent = (eventId) => axios.put(`${API_URL}/events/${eventId}/register`);
