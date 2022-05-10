export const TODOS_TOGGLE_TODO = "TODOS_TOGGLE_TODO";
export const TODOS_REMOVE_TODO = "TODOS_REMOVE_TODO";
export const TODOS_ADD_TODO = "TODOS_ADD_TODO";

export const addTodo = (todo) => ({
  type: TODOS_ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TODOS_TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id) => ({
  type: TODOS_REMOVE_TODO,
  payload: id,
});
