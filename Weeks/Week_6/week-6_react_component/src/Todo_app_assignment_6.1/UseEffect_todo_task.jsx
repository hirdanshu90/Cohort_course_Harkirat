import { useEffect, useState } from "react";

function TodoTask() {
  const [todos, setTodos] = useState([]);
  // Use state cannot use async await syntax, thats why .then() is used.
  // Set interval will send the request every 5 seconds to fetch the requests from the server.
  // useEffect(() => {
  //   setInterval(() => {
  //     fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
  //       const json = await res.json();
  //       console.log(json); // Add this line to see the fetched data

  //       // Why json.todos?
  //       // The server is expected to return a JSON object that contains a property named todos.
  //       setTodos(json.todos);
  //     });
  //   }, 5000);
  // }, []);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
      const json = await res.json();
      console.log(json); // Add this line to see the fetched data
      // Why json.todos?
      // The server is expected to return a JSON object that contains a property named todos.
      setTodos(json.todos);
      // console.log("setTodos updated");
    });
  }, []);

  return (
    <>
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

export default TodoTask;
