const mongoose = require("mongoose");
const express = require("express");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/user_db");

const app = express();
app.use(express.json());

// Define the User model
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    // Create a new user if does not exist
    const user = new User({
      name,
      email,
      password,
    });

    // Save the new user to the database
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    // Handle potential errors
    res.status(500).send("Failed to create user");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
