import TodoItem from "./TodoItem";
export default function TodoList({ todos, onDeleteButtonClick, onItemClick }) {
  return (
    <ul className="container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          onDeleteButtonClick={onDeleteButtonClick}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
}
