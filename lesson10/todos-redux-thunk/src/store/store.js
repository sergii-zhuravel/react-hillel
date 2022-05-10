import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import filter from "./filter/reducer";

const rootReducer = combineReducers({
  todos: reducer,
  filter: filter,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware()));
