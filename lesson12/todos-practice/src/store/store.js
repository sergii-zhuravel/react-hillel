import { combineReducers } from "redux";
import todos from "./todos/reducer";
import filter from "./filter/reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todos,
  filter,
});

export default configureStore({
  reducer: rootReducer,
});
