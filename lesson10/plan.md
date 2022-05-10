1. Home work review
2. How to configure Redux DevTools ?
3. combineReducers
4. redux-thunk
5. RTK

---

## Examples

<details>
 <summary>DevTools Configuration example</summary>

```javascript
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware()));
```

</details>

<details>
 <summary>Slice example</summary>

```javascript
const initialState = {
  todos: [
    { id: 1, title: "Got a laptop", isDone: true },
    { id: 2, title: "Pass the React course", isDone: false },
    { id: 3, title: "Got a job", isDone: false },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { type, payload }) => {
      state.todos.push({ id: Date.now(), ...payload });
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default configureStore({
  reducer: todosSlice.reducer,
});
```

</details>
