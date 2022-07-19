import { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodosList extends Component {
  state = {
    todos: [],
    title: "",
  };
  constructor() {
    super();
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    console.log("TODO LIST CONSTRUCTOR");
  }
  render() {
    return (
      <>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              item={todo}
              onDeleteButtonClick={this.onDeleteButtonClick}
              onItemClick={this.onItemClick}
            />
          ))}
        </ul>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEX///8AAACVlZXW1tbo6OgYGBhYWFj4+PjJycn8/Pynp6fT09OwsLDOzs5JSUnb29tSUlJkZGTw8PBeXl6Dg4PBwcFBQUG4uLiNjY12dnYyMjKfn58hISHi4uI3Nzd9fX0MDAwoKChubm6xHIQ8AAADkUlEQVRoge1aa5uyIBBV85Jl3vKW1rb1/3/kaoUyMCgIvh/ep/OtBT0CczkzrGUpIHF8z/Z8Z6fykBpOsU1QnTbiaGwazSYcdxvisgGHY7Mwv5aE47DtxDTJGSFJDXPkCIdt38ySHFCSg1mSC0qSmSVJUZLYLEklR5K7uQYJZlwMya1pX3+sHFfihYHrctMalKSgKOjPuCzR7LPhg6oCmuceJSnHcdb66jmKfDrhAgygJCEZLbghR8wBgkcVUCMdwjG+CNtMoQ8xfu1TQ+EP9xqPjJXoMkWJjbUh+mv4CEniY+ihJBXOceS+NZwZ3ZMBPOTQZkGDTUvMvDymRqrJSvmNfMPnCIZl827N5KWa2F5MmSiWad7AvD+/ctO4COiWXdOVwNdqIQkmNvJfuRUzwIPBAMyKg5abJiMW8CwwAHVIPgrKZCVFEt4WZeIpL2MIImx6wB6KVObD/X0A7vOsocgsxHJFHF6APwCj6R6fxMIXkAitxlHnEO7XUfjEjnzXXT5b4wJg9kDzyOmdWprBEp2K4ERWA9sw83USH7+2KJISGFx/pIxfHYfHSNHOahU9nJxzHMeZIzbdL/5/JFHTxw2dQmIREcnkGV0h58dyZyzYuA/KL0fdnmSv308z1ewOBpiP4onGP5hwVZeVxq/kRcdQ2UQ1Az5R9p8e0L9FeVkeSE12ZYUQKmP0FjLsD5R02vU/wtHrdnhOuvX/DiOJWZJw+UVzQKWLx2ziWXMlAhJY1+o2friS8L1dsOTVDWkhRlJAG9Z3+RghGVTcpE07bQ7sUN5F9P4tNFMjYolfCnHwW32oDWmlG8uha7AoTpDDdM/1g4SucLdohL8QdkS1pgZyh5jm2BX3JtpIEn/xxRcGkeerJF4QPVP/UkspkSh+/LaZeswpP/GqXc5KLmnAPhU5qCS+1DOhVIVaHgCibiEuZkjWlALoFM1rXdDveShwMB3oWWEFFb7CjSjTwZk1m1XtwQHM9cqsfGvWkkSQZNa+4FyFOpWRwLPmBXTxjzyHZYF+l+B+hoDeLyU9CdTpQmswnG7n0Dv9pDmn5wbbR8pmFhV1QPr76L0EGbwjUXA0MBknTor44XeYOwXTxRK2627TH0zraFY4dOGnGj9lAYX0Rv8f8wQkxfIDa2C24BcAcCw53Fr8k5XAJsxGxQ3MGVtVN/Ql70aVYO/S0+2dfvNNiBuRC+mmDd/yebWvd+Xz+AMSoyNQ5OZrmwAAAABJRU5ErkJggg==" />
        <form action="">
          <fieldset>
            <legend>Enter new todo</legend>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onInputChange}
            />
            <button onClick={this.onSubmitButtonClick}>Add</button>
          </fieldset>
        </form>
      </>
    );
  }

  onInputChange(e) {
    this.setState({ title: e.target.value });
  }

  onSubmitButtonClick(e) {
    e.preventDefault();
    const newItem = {
      title: this.state.title,
      completed: false,
    };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({ todos: [...this.state.todos, data], title: "" })
      );
  }

  onItemClick(id) {
    const item = this.state.todos.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    this.setState({
      todos: this.state.todos.map((item) => (item.id === id ? newItem : item)),
    });
  }

  onDeleteButtonClick(id) {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "DELETE",
    });
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  componentDidMount() {
    console.log("TODO LIST DID MOUNT");
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos")
      .then((resp) => resp.json())
      .then((data) => this.setState({ todos: data }));
  }
}
