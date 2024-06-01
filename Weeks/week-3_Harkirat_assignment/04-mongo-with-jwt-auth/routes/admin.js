const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  // If user already exist, no need to create
  // If user does not exist
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    message: "Admin created successfully",
  });
});
router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  //authorization check
  const user = await User.find({
    username: username,
    password: password,
  });
  if (user) {
    const Token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.json({
      Token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email or password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  //   Use Zod to do input validation.
  const newCourse = await Course.create({
    title: title,
    description: description,
    imageLink: imageLink,
    price: price,
  });
  console.log(newCourse);
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
