import React from "react";
import { useState } from "react";

export default function TodoItem({ title }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <li onClick={() => setEditMode(!editMode)}>
      {editMode ? <input value={title} /> : title} <button>x</button>
    </li>
  );
}
