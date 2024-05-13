// Title , Description, completed.

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vijhridanshu:eA05QkrUtUuJy4Oj@cluster0.cgzg0vy.mongodb.net/todo_db"
);

// In the database todo_db, TodoSchema will be created.
// This will be addressed as 'todo' inside the backend to access database.
const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo_db", TodoSchema);

module.exports = {
  todo,
};
