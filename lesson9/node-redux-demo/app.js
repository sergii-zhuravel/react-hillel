import redux from "redux";

// reducer, action, action type, store

const ACTION_INCREMENT_COUNTER = "ACTION_INCREMENT_COUNTER";
const ACTION_DECREMENT_COUNTER = "ACTION_DECREMENT_COUNTER";
const ACTION_SET_COUNTER = "ACTION_SET_COUNTER";

const incrementCounter = { type: ACTION_INCREMENT_COUNTER };

const INITIAL_STATE = { counter: 0 };

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  console.log("ACTION FIRED: ", type);
  switch (type) {
    case ACTION_INCREMENT_COUNTER:
      return { counter: state.counter + 1 };
    case ACTION_DECREMENT_COUNTER:
      return { counter: state.counter - 1 };
    case ACTION_SET_COUNTER:
      return { counter: payload };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

//action
// const incAction = {type: "INC"};
console.log(store.getState());
store.dispatch(incrementCounter);
store.dispatch(incrementCounter);

console.log(store.getState());
store.dispatch({ type: ACTION_SET_COUNTER, payload: 5 });
console.log(store.getState());
