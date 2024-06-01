/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// This iterates over all of the todos and renders over the button.
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Not Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
