export const FILTER_CHANGE_FILTER = "FILTER_CHANGE_FILTER";

// export const changeFilter = (filter) => ({
//   type: FILTER_CHANGE_FILTER,
//   payload: filter,
// });

export const saveFilter = (filter) => {
  return function (state, dispatch) {
    console.log(state);
    console.log(dispatch);
  };
};
