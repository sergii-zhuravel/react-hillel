export const ACTION_CHANGE_TODO_DONE = "ACTION_CHANGE_TODO_DONE";

export const changeDone = (payload) => ({
  type: ACTION_CHANGE_TODO_DONE,
  payload,
});
