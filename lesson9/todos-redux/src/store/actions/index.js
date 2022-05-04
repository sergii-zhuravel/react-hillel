export const ACTION_TOGGLE_TODO_IS_DONE = "ACTION_TOGGLE_TODO_IS_DONE";

export const toogleIsDone = (payload) => ({
  type: ACTION_TOGGLE_TODO_IS_DONE,
  payload,
});
