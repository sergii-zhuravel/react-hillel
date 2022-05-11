import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../services/todos";

// action types
export const TODOS_TOGGLE_TODO = "TODOS_TOGGLE_TODO";
export const TODOS_REMOVE_TODO = "TODOS_REMOVE_TODO";
export const TODOS_ADD_TODO = "TODOS_ADD_TODO";
export const TODOS_SET_TODOS = "TODOS_SET_TODOS";

// actions

export const addTodo = (todo) => ({
  type: TODOS_ADD_TODO,
  payload: todo,
});

export const setTodos = (todos) => ({
  type: TODOS_SET_TODOS,
  payload: todos,
});

export const fetchTodos = () => {
  return function (dispatch) {
    getTodos().then((todos) => dispatch(setTodos(todos)));
  };
};

// thunks
export const removeTodoById = (id) => {
  return function (dispatch, getState) {
    deleteTodo(id).then(() => {
      const { todos } = getState();
      const updatedTodos = todos.todos.filter((todo) => todo.id !== id);
      dispatch(setTodos(updatedTodos));
    });
  };
};

export const toggleTodoById = (id) => {
  return function (dispatch, getState) {
    const { todos: todosSlice } = getState();

    let updatedTodo = todosSlice.todos.find((todo) => todo.id === id);
    updatedTodo = { ...updatedTodo, completed: !updatedTodo.completed };

    updateTodo(updatedTodo).then(() => {
      const updatedTodos = todosSlice.todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      dispatch(setTodos(updatedTodos));
    });
  };
};

export const createNewTodo = (todo) => {
  return function (dispatch) {
    createTodo(todo).then(() => {
      dispatch(addTodo(todo));
    });
  };
};
