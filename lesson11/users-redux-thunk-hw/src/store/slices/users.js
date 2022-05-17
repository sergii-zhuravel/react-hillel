import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  deleteUser,
  getUsersList,
} from "../../services/usersService";

const initialState = {
  isLoading: false,
  users: [],
};

export const fetchUsers = () => {
  return function (dispatch) {
    getUsersList().then((users) => dispatch(setUsers(users)));
  };
};

export const createUserThunk = (user) => {
  return function (dispatch, getState) {
    createUser(user);
    const state = getState();
    const newUsers = [...state.users.users, user];
    dispatch(setUsers(newUsers));
  };
};

export const deleteUserThunk = (id) => {
  return function (dispatch, getState) {
    deleteUser(id);
    const state = getState();
    const newUsers = state.users.users.filter((user) => user.id !== id);
    dispatch(setUsers(newUsers));
  };
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    toogleIsLoading: (state, { payload }) => {
      state.isLoading = payload !== undefined ? payload : !state.isLoading;
    },
  },
});

export const { setUsers, toogleIsLoading } = usersSlice.actions;

export default usersSlice.reducer;
