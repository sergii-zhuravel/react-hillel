React.memo
useRef
useReducer
TypeScript basics
PropTypes

Firebase/headless CMS

React.memo()

## useRef

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
const [inputValue, setInputValue] = useState("");
const count = useRef(0);

useEffect(() => {
count.current = count.current + 1;
});

return (
<>
<input
type="text"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
/>
<h1>Render Count: {count.current}</h1>
</>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

---

import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
const inputElement = useRef();

const focusInput = () => {
inputElement.current.focus();
};

return (
<>
<input type="text" ref={inputElement} />
<button onClick={focusInput}>Focus Input</button>
</>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

---

const initialState = {count: 0};

function reducer(state, action) {
switch (action.type) {
case 'increment':
return {count: state.count + 1};
case 'decrement':
return {count: state.count - 1};
default:
throw new Error();
}
}

function Counter() {
const [state, dispatch] = useReducer(reducer, initialState);
return (
<>
Count: {state.count}
<button onClick={() => dispatch({type: 'decrement'})}>-</button>
<button onClick={() => dispatch({type: 'increment'})}>+</button>
</>
);
}
