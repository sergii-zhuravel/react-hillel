import { deleteTodo, getTodos } from "../../services/todos";

export const TODOS_TOGGLE_TODO = "TODOS_TOGGLE_TODO";
export const TODOS_REMOVE_TODO = "TODOS_REMOVE_TODO";
export const TODOS_ADD_TODO = "TODOS_ADD_TODO";
export const TODOS_SET_TODOS = "TODOS_SET_TODOS";

export const addTodo = (todo) => ({
  type: TODOS_ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TODOS_TOGGLE_TODO,
  payload: id,
});

// export const removeTodo = (id) => ({
//   type: TODOS_REMOVE_TODO,
//   payload: id,
// });

export const setTodos = (todos) => ({
  type: TODOS_SET_TODOS,
  payload: todos,
});

export const fetchTodos = () => {
  return function (dispatch) {
    getTodos().then((todos) => dispatch(setTodos(todos)));
  };
};

export const removeTodo = (id) => {
  return function (dispatch, getState) {
    deleteTodo(id).then(() => {
      const { todos } = getState();
      const updatedTodos = todos.todos.filter((todo) => todo.id !== id);
      dispatch(setTodos(updatedTodos));
    });
  };
};
