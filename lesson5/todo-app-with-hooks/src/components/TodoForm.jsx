import { useState } from "react";

export default function TodoForm({ onCreateTodo }) {
  const [title, setTitle] = useState("");

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    onCreateTodo(title);
    setTitle("");
  };

  return (
    <form action="" className="container">
      <input
        className="form-control"
        type="text"
        value={title}
        onChange={onInputChange}
      />

      <button className="btn btn-outline-primary" onClick={onSubmitButtonClick}>
        Add
      </button>
    </form>
  );
}
