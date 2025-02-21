import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Eo from "../models/Eo.js"; // Ensure you have this model
import authMiddleware from "../middleware/authMiddleware.js"
const router = express.Router();

router.post("/", authMiddleware, (req, res) => {
  const { id,} = req.user;
   

  return res.json({
      message: "User authenticated successfully",
      id,
     
  });
});

// Test route
router.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// User Login
router.post("/User/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// User Register
router.post("/User/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10h",
    });



    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// Eo Login
router.post("/Eo/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const eo = await Eo.findOne({ email });
    if (!eo || !(await eo.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: eo._id }, process.env.JWT_SECRET, {
      expiresIn: "10h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// Eo Register
router.post("/Eo/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingEo = await Eo.findOne({ email });
    if (existingEo) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newEo = new Eo({ name, email, password });
    await newEo.save();

    const token = jwt.sign({ id: newEo._id }, process.env.JWT_SECRET, {
      expiresIn: "10h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

export default router;
