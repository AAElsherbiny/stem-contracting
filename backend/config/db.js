const mongoose = require('mongoose');

// Fail fast instead of waiting when the database is not connected.
mongoose.set('bufferCommands', false);

async function connectDB() {
  if (!process.env.MONGODB_URI) {
    console.warn('MONGODB_URI is not set. Starting without a database; saving inquiries will fail.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
