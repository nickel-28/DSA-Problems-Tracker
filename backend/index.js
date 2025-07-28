import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Problem from "./models/Problem.js";

dotenv.config();
const app = express();

// app.use(cors());
app.use(cors({
  origin: "https://shiny-melomakarona-9f0037.netlify.app",
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/problems", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch problems" });
  }
});

app.post("/api/problems", async (req, res) => {
  try {
    const newProblem = new Problem(req.body);
    const saved = await newProblem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to add problem" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
