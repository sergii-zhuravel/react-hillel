import { ACTION_TOGGLE_TODO_IS_DONE } from "../actions";

const INITIAL_STATE = {
  todos: [
    { id: 1, title: "todo1", isDone: true },
    { id: 2, title: "todo2", isDone: false },
  ],
};
export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_TOGGLE_TODO_IS_DONE:
      const newTodos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return { todos: newTodos };
    default:
      return state;
  }
}
