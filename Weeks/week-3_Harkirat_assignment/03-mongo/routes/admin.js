const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes

// This means request will be /admin/signup
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

// Now while adding courses, there is an adminMiddleware.
// So one needs to add the username and password in the postman 'Header' for authorization.
// Request will be /admin/courses
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

// request will be /admin/courses.
// Authentication logic is handled by the admin middleware.
router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
