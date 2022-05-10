import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/actions";
import TodoList from "./List";

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleToggleTodo(id) {
    dispatch(toggleTodo(id));
  }

  function handleRemoveTodo(id) {
    dispatch(removeTodo(id));
  }

  return (
    <TodoList
      todos={todos}
      toggleTodo={handleToggleTodo}
      removeTodo={handleRemoveTodo}
    />
  );
}
