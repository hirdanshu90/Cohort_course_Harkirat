import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const title = e.target.value;
          setTitle(title);
        }}
      ></input>
      <br></br>
      <input
        id="description"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <br></br>
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          // USing fetch here, this is how it works.
          fetch("http://localhost:4000/todos", {
            method: "POST",
            body: JSON.stringify({
              // We create local state variable called title and for description 
              // (In future we use react query)
              title: title,
              description: description,
            }),
            headers: { "Content-Type": "application/json" },
          }).then(async function (res) {
            // eslint-disable-next-line no-unused-vars
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
