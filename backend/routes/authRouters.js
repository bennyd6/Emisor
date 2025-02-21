import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Eo from "../models/Eo.js"; // Ensure you have this model
import Event from "../models/Event.js";
import authMiddleware from "../middleware/authMiddleware.js"
const router = express.Router();

router.post("/", authMiddleware, (req, res) => {
  const { id,} = req.user;
  console.log("Hello");
   

  return res.json({
      message: "User authenticated successfully",
      id,
     
  });
});
router.post('/getuser', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('name email password');
    
    // console.log(user.name);
    if (!user) return res.status(404).send('User not found');

    res.json(user.name);
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).send('Internal Server Error');
  }
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

    const token = jwt.sign({ id: user._id }, "process.env.JWT_SECRET", {
      expiresIn: "10h",
    });
    console.log(token);

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

    const token = jwt.sign({ id: user._id }, "process.env.JWT_SECRET", {
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

    const token = jwt.sign({ id: eo._id }, "process.env.JWT_SECRET", {
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

    const token = jwt.sign({ id: newEo._id }, "process.env.JWT_SECRET", {
      expiresIn: "10h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

router.post('/Eo/events', authMiddleware, async (req, res) => {
  try {
    // Log the user object to ensure it contains the userId
    console.log("User in Event Creation Route:", req.user);

    if (!req.user.id) {
      return res.status(400).json({ message: 'User ID is missing in request' });
    }

    // Create event with the userId attached
    const newEvent = new Event({
      ...req.body,  // Get event data from the body
      userId: req.user.id,  // Attach the userId to the event data
    });

    await newEvent.save();  // Save event to database

    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create event', error });
  }
});


export default router;