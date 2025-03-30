const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // MongoDB connection
const cors = require('cors'); // Enable CORS for API requests
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000; // Use port 5000 for backend

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import Routes
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

// Use API Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// Serve static files from the React app (production build)
app.use(express.static(path.join(__dirname, 'build')));

// "Catchall" handler: for any request that doesn't match above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
