const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jacobmooradian:cnkNnqdlTXIhaM9q@cs110cluster.lflxe9i.mongodb.net/?retryWrites=true&w=majority&appName=cs110Cluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
