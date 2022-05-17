import { combineReducers } from "redux";
import users from "./slices/users";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  users,
});

export default configureStore({
  reducer: rootReducer,
});

