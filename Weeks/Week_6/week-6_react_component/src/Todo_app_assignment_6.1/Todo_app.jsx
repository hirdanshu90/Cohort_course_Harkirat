/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";

let counter = 4;
/* eslint-disable react/prop-types */
export function Todo_app() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "fitness ke liye",
    },
    {
      id: 2,
      title: "eat food",
      description: "eat for your health",
    },
    {
      id: 3,
      title: "buy something",
      description: "go to grocery store",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: "checking the map syntax",
      },
    ]);
  }
  return (
    <>
      <div>Hello from Todo</div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => (
        <Todo
          key={todo.key}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </>
  );

  function Todo({ title, description }) {
    return (
      <>
        <h4> {title}</h4>
        <h6> {description}</h6>
      </>
    );
  }
}
