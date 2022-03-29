import { Component, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
// export default class TodosListOld extends Component {
//   state = {
//     todos: [],
//     title: "",
//   };
//   constructor() {
//     super();
//     this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
//     this.onItemClick = this.onItemClick.bind(this);
//     this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
//     this.onInputChange = this.onInputChange.bind(this);
//     console.log("TODO LIST CONSTRUCTOR");
//   }
//   render() {
//     return (
//       <>
//         <ul>
//           {this.state.todos.map((todo) => (
//             <TodoItem
//               key={todo.id}
//               item={todo}
//               onDeleteButtonClick={this.onDeleteButtonClick}
//               onItemClick={this.onItemClick}
//             />
//           ))}
//         </ul>
//         <form action="">
//           <input
//             type="text"
//             value={this.state.title}
//             onChange={this.onInputChange}
//           />
//           <button onClick={this.onSubmitButtonClick}>Add</button>
//         </form>
//       </>
//     );
//   }

//   onInputChange(e) {
//     this.setState({ title: e.target.value });
//   }

//   onSubmitButtonClick(e) {
//     e.preventDefault();
//     const newItem = {
//       title: this.state.title,
//       completed: false,
//     };
//     fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newItem),
//     })
//       .then((resp) => resp.json())
//       .then((data) =>
//         this.setState({ todos: [...this.state.todos, data], title: "" })
//       );
//   }

//   onItemClick(id) {
//     const item = this.state.todos.find((todo) => todo.id === id);
//     const newItem = { ...item, completed: !item.completed };
//     fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newItem),
//     });
//     this.setState({
//       todos: this.state.todos.map((item) => (item.id === id ? newItem : item)),
//     });
//   }

//   onDeleteButtonClick(id) {
//     fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
//       method: "DELETE",
//     });
//     const newTodos = this.state.todos.filter((todo) => todo.id !== id);
//     this.setState({ todos: newTodos });
//   }

//   componentDidMount() {
//     console.log("TODO LIST DID MOUNT");
//     fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos")
//       .then((resp) => resp.json())
//       .then((data) => this.setState({ todos: data }));
//   }
// }

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos")
      .then((resp) => resp.json())
      .then((data) => setTodos(data));
  }, []);

  const onDeleteButtonClick = (id) => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "DELETE",
    });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onItemClick = (id) => {
    const item = todos.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    const newTodos = todos.map((item) => (item.id === id ? newItem : item));
    setTodos(newTodos);
  };

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    const newItem = {
      title: title,
      completed: false,
    };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTodos([...todos, data]);
        setTitle("");
      });
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onDeleteButtonClick={onDeleteButtonClick}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
      <form action="">
        <input type="text" value={title} onChange={onInputChange} />
        <button onClick={onSubmitButtonClick}>Add</button>
      </form>
    </>
  );
}
