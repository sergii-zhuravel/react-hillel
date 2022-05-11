import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_ALL, FILTER_DONE } from "../constants/filters";
import {
  fetchTodos,
  removeTodoById,
  toggleTodoById,
} from "../store/todos/actions";
import TodoList from "./List";

export default function TodoListContainer() {
  let todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  if (filter !== FILTER_ALL) {
    todos = todos.filter((todo) => todo.completed === (filter === FILTER_DONE));
  }

  function handleToggleTodo(id) {
    dispatch(toggleTodoById(id));
  }

  function handleRemoveTodo(id) {
    dispatch(removeTodoById(id));
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <TodoList
      todos={todos}
      toggleTodo={handleToggleTodo}
      removeTodo={handleRemoveTodo}
    />
  );
}
