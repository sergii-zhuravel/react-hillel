import { Component } from "react";
export default class TodoItem extends Component {
  constructor() {
    super();
    console.log("TODO ITEM CONSTRUCTOR");
  }
  render() {
    const { completed, title, id } = this.props.item;
    return (
      <li
        style={{ backgroundColor: getStyle(completed) }}
        onClick={() => this.props.onItemClick(id)}
      >
        {title}
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.props.onDeleteButtonClick(id);
          }}
          title="Delete item"
        >
          Delete
        </button>
      </li>
    );
  }

  componentDidMount() {
    console.log("TODO ITEM DID MOUNT");
  }

  componentWillUnmount() {
    console.log("TODO ITEM DID UNMOUNT");
  }
}

function getStyle(completed) {
  return completed ? "lightblue" : "yellow";
}
