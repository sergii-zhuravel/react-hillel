import React, { useState } from "react";

export default function Form({ formName, setFormName, createTodo }) {
  function onHeaderClick() {
    setFormName("Name" + Math.random());
  }
  const [title, setTitle] = useState("");
  return (
    <div>
      <h2 onClick={onHeaderClick}>Form - {formName}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => createTodo(title)}>Save</button>
    </div>
  );
}
