import mongoose from 'mongoose';

// For local development, use a memory-based MongoDB or default to localhost
// This prevents issues if MongoDB is not installed locally
mongoose.set('strictQuery', false);
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      // Add connection options for stability
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    console.log('Connected to MongoDB database');
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Don't exit the process, let the application continue with alternatives
    throw error;
  }
};

// Message Schema for contact form
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Message = mongoose.model('Message', messageSchema);