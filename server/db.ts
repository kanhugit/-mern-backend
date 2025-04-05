import dotenv from "dotenv";
dotenv.config();

console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);

import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI must be set. Did you forget to provision a database?"
  );
}

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db(); // You can optionally specify db name here
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}
