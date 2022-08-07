import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";

// const mockTodos = [
//   { title: "Task1", id: 1, comleted: false },
//   { title: "Task4", id: 2, comleted: false },
//   { title: "Task3", id: 3, comleted: false },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState("My form");

  useEffect(() => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function createTodo(title) {
    const newTodo = {
      title,
      completed: false,
    };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide" : "Show"} form
      </button>
      {showForm ? (
        <Form
          formName={formName}
          setFormName={setFormName}
          createTodo={createTodo}
        />
      ) : null}

      <hr />

      <footer>
        <p>Count of todos: {todos.length} </p>
        <p>Form name: {formName} </p>
      </footer>
    </div>
  );
}

export default App;
