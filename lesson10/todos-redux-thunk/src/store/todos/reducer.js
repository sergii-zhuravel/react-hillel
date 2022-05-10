import {
  TODOS_ADD_TODO,
  TODOS_REMOVE_TODO,
  TODOS_TOGGLE_TODO,
  TODOS_SET_TODOS,
} from "./actions";

const INITIAL_STATE = {
  todos: [
    // { id: 1, title: "Got a laptop", isDone: true },
    // { id: 2, title: "Pass the React course", isDone: false },
    // { id: 3, title: "Got a job", isDone: false },
  ],
};
export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case TODOS_SET_TODOS:
      return { ...state, todos: [...payload] };
    case TODOS_ADD_TODO:
      const newTodo = { id: Date.now(), ...payload };
      return { ...state, todos: [...state.todos, newTodo] };
    case TODOS_REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case TODOS_TOGGLE_TODO:
      const newTodos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      return { ...state, todos: newTodos };
    default:
      return state;
  }
}
