const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events');
 // Event controller
const authMiddleware = require('../middleware/auth'); // Authentication middleware

// Create a new event
router.post('/', authMiddleware, eventController.createEvent);

// Get all events
router.get('/', eventController.getAllEvents);

// Get a single event by ID
router.get('/:id', eventController.getEventById);

// Update an event by ID
router.put('/:id', authMiddleware, eventController.updateEvent);

// Delete an event by ID
router.delete('/:id', authMiddleware, eventController.deleteEvent);

module.exports = router;
