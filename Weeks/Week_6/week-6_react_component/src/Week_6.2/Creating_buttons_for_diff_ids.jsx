/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Question : Here fetch the data for that todo from the given endpoint and the render it.
// How would tje dependency array change?
import axios from "axios";
import { useEffect, useState } from "react";

function Todo_id_Button() {
  // eslint-disable-next-line no-unused-vars
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <h3>Hello from Todo_id_Fetch.......</h3>
      <br></br>
      <br></br>
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>

      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setSelectedId(4);
        }}
      >
        4
      </button>
      <br></br>
      <Todo id={selectedId}></Todo>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Todo({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    console.log("step 1:");
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        setTodo(response.data.todo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div>
      Id : {id}
      <h2>{todo.title}</h2>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default Todo_id_Button;
