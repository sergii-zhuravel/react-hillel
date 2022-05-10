import { createStore, combineReducers, applyMiddleware } from "redux";
import todos from "./todos/reducer";
import filter from "./filter/reducer";
import { compose } from "@mui/system";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  todos,
  filter,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
