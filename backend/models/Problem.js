import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  name: String,
  link: String,
  difficulty: String,
  category: String,
});

export default mongoose.model("Problem", problemSchema);
