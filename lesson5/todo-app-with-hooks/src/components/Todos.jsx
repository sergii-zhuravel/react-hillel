import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, setTodos] = useState([]);

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

  const onCreateTodo = (title) => {
    const newItem = {
      title,
      completed: false,
    };
    createTodo(newItem).then((data) => {
      setTodos([...todos, data]);
    });
  };

  return (
    <>
      <TodoList
        todos={todos}
        onDeleteButtonClick={onDeleteButtonClick}
        onItemClick={onItemClick}
      />
      <TodoForm onCreateTodo={onCreateTodo} />
    </>
  );
}
