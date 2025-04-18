const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.green);
  } catch (err) {
    console.error('Error connecting to DB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
