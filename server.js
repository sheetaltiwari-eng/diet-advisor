import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import Routes
import authRoutes from './backend/routes/authRoutes.js';
import foodRoutes from './backend/routes/foodRoutes.js';
import assessmentRoutes from './backend/routes/assessmentRoutes.js';
import dietPlanRoutes from './backend/routes/dietPlanRoutes.js';
import chatRoutes from './backend/routes/chatRoutes.js';
import feedbackRoutes from './backend/routes/feedbackRoutes.js';
import adminRoutes from './backend/routes/adminRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes setup
app.use('/api/auth', authRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/dietplans', dietPlanRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/admin', adminRoutes);

// Database connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI || mongoURI === "I got the string") {
      console.warn('⚠️ Please replace "I got the string" in your .env file with your actual MongoDB connection string.');
    }

    try {
      await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 5000 });
      console.log('✅ MongoDB connected successfully');
    } catch (err) {
      console.warn('⚠️ MongoDB Atlas connection blocked by IP Whitelist:', err.message);
      console.log('🔄 Running in Local Mode with filesystem fallbacks.');
    }

  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('🔄 Running in Local Mode with filesystem fallbacks.');
  }
};

connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Smart Diet Advisor API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});