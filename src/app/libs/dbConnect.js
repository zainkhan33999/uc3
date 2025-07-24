import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("already connected");
    return;
  }

  try {
    console.log("uri", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);  // No options needed
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Could not connect to MongoDB' ,error);
  }
};

export default dbConnect;
