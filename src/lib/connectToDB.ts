import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached: { [key: string]: unknown } = global.mongoose;

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

async function dbConnect() {
  if (cached.connnection) {
    return cached.connection;
  }

  if (!cached.promise) {
    cached.promise = await mongoose
      .connect(MONGODB_URI as string)
      .then(mongoose => {
        console.log("Connected to DB");
        return mongoose;
      })
      .catch(e => {
        console.log(e);
        return;
      });
  }
  cached.connection = await cached.promise;
  return cached.connection;
}

export default dbConnect;
