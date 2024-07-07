/* eslint-disable react/prop-types */
// hook
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Home",
      description: "Time to go to Home",
      completed: false,
    },
    {
      title: "Go to Gym",
      description: "Body banal hai ",
      completed: false,
    },
    {
      title: "Study REact",
      description: "Study React ",
      completed: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "Adding Todo",
        description: "Adding Todo using React",
        completed: false,
      },
    ]);
  }
// Functional component.
  function Todo(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <h3>{props.completed}</h3>
      </div>
    );
  }

  // Render Method in App.
  return (
    <div>
      <button onClick={addTodo}>Add the Todo work in the list</button>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}

export default App;
