import { combineReducers } from "redux";
import todos from "./todos/reducer";
import filter from "./filter/reducer";
// import { compose } from "@mui/system";
// import reduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todos,
  filter,
});

export default configureStore({
  reducer: rootReducer,
});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(reduxThunk))
// );
