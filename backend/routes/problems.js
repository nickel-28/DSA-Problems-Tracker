import express from "express";
import Problem from "../models/Problem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const list = await Problem.find();
    res.json(list);
  } catch {
    res.status(500).json({ message: "Error fetching problems" });
  }
});

export default router;
