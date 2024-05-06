// WE use ZOD library

const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

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
  password: "hirdanshu",
});

app.post("/login", function (req, res) {
  const response = validateInput(res.body);
  if (!response.success) {
    res.json({
      msg: "Your input was invalid",
    });
  }
  return;
});

app.listen(3004);
