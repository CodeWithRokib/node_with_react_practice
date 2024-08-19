import mongoose from 'mongoose';
import colors from 'colors';

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`Database Connected Succefully ${conn.connection.host}`.bgBlue);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
};

export default dbConnect;