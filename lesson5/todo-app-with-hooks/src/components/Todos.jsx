import { useCallback, useEffect, useMemo, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import { useLocalStorage, useAsync } from "../hooks/common";

export default function Todos() {
  // const [todos, setTodos] = useState([]);
  // const [status, setStatus] = useState("IDLE");
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const {
    run,
    data: todos,
    setData: setTodos,
    status,
  } = useAsync(getTodos, []);

  const filteredTodos = useMemo(() => {
    let filteredTodos = todos;
    if (filter !== "all") {
      filteredTodos = todos.filter(
        (todo) =>
          (filter === "done" && todo.completed) ||
          (filter === "notdone" && !todo.completed)
      );
    }
    return filteredTodos;
  }, [filter, todos]);

  useEffect(() => {
    run();
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

  const onCreateTodo = useCallback(
    (title) => {
      const newItem = {
        title,
        completed: false,
      };
      createTodo(newItem).then((data) => {
        setTodos([...todos, data]);
      });
    },
    [todos]
  );

  return (
    <>
      <h1>{status}</h1>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onDeleteButtonClick={onDeleteButtonClick}
        onItemClick={onItemClick}
      />
      <TodoForm onCreateTodo={onCreateTodo} />
    </>
  );
}
