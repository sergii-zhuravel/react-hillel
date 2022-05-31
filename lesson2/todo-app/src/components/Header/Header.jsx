import React, { Component } from "react";
import "./style.css";

export default class Header extends Component {
  state = {
    text: "Hello, Hillel",
    isVisible: true,
    food: ["eggs", "bread", "milk", "butter"],
    newFood: "",
  };
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }
  render() {
    const { isVisible, text, food } = this.state;
    return (
      <>
        {isVisible && <h1>{text}</h1>}
        <button onClick={this.onButtonClick}>
          {isVisible ? "Hide" : "Show"}
        </button>
        <ul onClick={this.onDeleteButtonClick}>
          {food.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <input type="text" onChange={this.onInputChange.bind(this)} />
        <button>Add</button>
      </>
    );
  }

  onInputChange(e) {
    this.setState({ newFood: e.target.value });
  }

  onButtonClick() {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }

  onDeleteButtonClick() {
    const { food } = this.state;
    const [, ...restElements] = food;
    this.setState({ food: restElements });
  }
}
