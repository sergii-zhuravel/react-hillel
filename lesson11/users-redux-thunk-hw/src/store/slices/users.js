import { createSlice } from "@reduxjs/toolkit";
import { getUsersList } from "../../services/usersService";

const initialState = {
  isLoading: false,
  users: [],
};

export const fetchUsers = () => {
  return function (dispatch) {
    getUsersList().then((users) => dispatch(setUsers(users)));
  };
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { type, payload }) => {
      state.users = payload;
    },
    toogleIsLoading: (state, { type, payload }) => {
      state.isLoading = payload !== undefined ? payload : !state.isLoading;
    },
  },
});

export const { setUsers, toogleIsLoading } = usersSlice.actions;

export default usersSlice.reducer;
