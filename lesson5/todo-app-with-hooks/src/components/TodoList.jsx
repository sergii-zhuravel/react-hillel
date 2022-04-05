import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todos";
import TodoItem from "./TodoItem";
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  const onDeleteButtonClick = (id) => {
    deleteTodo(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onItemClick = (id) => {
    const item = todos.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    updateTodo(newItem);
    const newTodos = todos.map((item) => (item.id === id ? newItem : item));
    setTodos(newTodos);
  };

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    const newItem = {
      title: title,
      completed: false,
    };
    createTodo(newItem).then((data) => {
      setTodos([...todos, data]);
      setTitle("");
    });
  };

  return (
    <>
      <ul class="container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onDeleteButtonClick={onDeleteButtonClick}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
      <form action="" className="container">
        <input className="form-control" type="text" value={title} onChange={onInputChange} />

        <button className="btn btn-outline-primary" onClick={onSubmitButtonClick}>Add</button>
      </form>
    </>
  );
}
