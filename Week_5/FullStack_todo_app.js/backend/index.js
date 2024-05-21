const express = require("express");
// From object destructuring.
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({}));

app.post("/todos", async (req, res) => {
  // To take the list from the body
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "Failed to create inputs" });
    return;
  }

  // Put the input in mongodb.
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    complete: false,
  });
  res.json({
    msg: "Todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(404).json({ message: "Invalid update payload" });
  }
  // Updating the todo list, for this particular id, we want to update: completed.
  await todo.update(
    {
      _id: req.body.id,
    },
    { completed: true }
  );
  res.json({
    message: "Todo updated successfully",
  });
});

app.listen(4000);
