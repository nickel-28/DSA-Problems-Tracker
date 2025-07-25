import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  link: String,
  category: String,
  level: String,
});

// 🔥 Fix: explicitly set the collection name to "problem"
const Problem = mongoose.model("Problem", problemSchema, "problem");

export default Problem;
