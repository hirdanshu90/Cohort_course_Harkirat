import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos
        todos={[
          {
            title: "asd",
            description: "Add this to list",
            completed: false,
          },
        ]}
      ></Todos>
    </div>
  );
}

export default App;
