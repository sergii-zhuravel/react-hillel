export const FILTER_CHANGE_FILTER = "FILTER_CHANGE_FILTER";

export const changeFilter = (filter) => ({
  type: FILTER_CHANGE_FILTER,
  payload: filter,
});
