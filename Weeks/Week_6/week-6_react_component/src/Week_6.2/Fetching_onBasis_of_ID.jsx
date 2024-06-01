/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Question : Here fetch the data for that todo from the given endpoint and the render it.
// How would tje dependency array change?
import axios from "axios";
import { useEffect, useState } from "react";

function Todo_id_Fetch() {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      Hello from Todo_id_Fetch.......
      <br></br>
      <br></br>
      <Todo id={2}></Todo>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Todo({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [id]);

  return (
    <div>
      <h2>{todo.title}</h2>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default Todo_id_Fetch;
