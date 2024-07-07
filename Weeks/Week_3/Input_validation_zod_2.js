//  We need to see the input size/ correct input VALUE/ what to return / if array/
// WE use ZOD library

const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

// ZOD defining different things.
// Array of number with atleast 1 input, return true else return false

// function validateInput(arr) {
//   const schema = zod.array(zod.number());

//   const response = schema.safeParse(arr);
//   console.log(response);
// }

// validateInput([1, 2, 3]);

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "hirdanshu@gmail.com",
  password: "hirdshu",
});

app.post("/api/health-checkup", function (req, res) {
  // kidneys = [1,2]
  const response = zod.array(zod.number);
  const kidneys = req.body.kidneys;
  const kidneylength = kidneys.length;

  res.send("you have " + kidneylength + "kidneys");
});

app.listen(3000);

// Global catches middleware:
// THis is passed at the end of all the routes. This handles all the errors.
app.use((err, req, res, next) => {
  errorCount++;
  res.json({
    msg: "Sorry something is up with our server",
  });
});
