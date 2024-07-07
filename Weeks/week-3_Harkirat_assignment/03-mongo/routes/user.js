const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username: username,
    password: password,
  });
  res.json({
    message: "User created successfully",
  });
});

// This endpoint is not protected as anyone can see the courses. Here one can filter out the details that one wants to show to the public.
router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

// We don't have a different table for purchased courses.
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  //   Can add input validation using zod.
  try {
    await User.updateOne(
      {
        username: username,
      },
      { $push: { purchasedCourses: courseId } }
    );
  } catch (err) {
    console.log(err);
  }
  res.json({
    message: "Course purchased successfully",
  });
});

// This route is protected
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
