import { useEffect, useState } from "react";
import axios from "axios";

function HookApp() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos);
      });
  }, []);

  return (
    <>
      Hello From week 6.2
      {/* Iterate over all the todos */}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </>
  );
}

export default HookApp;
