require('dotenv').config(); // THIS IS CRITICAL - MUST BE AT THE TOP

const mongoose = require('mongoose');
const fs = require('fs');
const Event = require('./models/Event');
const User = require('./models/User'); // Ensure you have a User model created

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    const sampleEvents = JSON.parse(fs.readFileSync('./data/sample-event.json', 'utf-8'));
    const sampleUsers = JSON.parse(fs.readFileSync('./data/sample-users.json', 'utf-8'));

    await Event.insertMany(sampleEvents);
    await User.insertMany(sampleUsers);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error seeding database:', err));
