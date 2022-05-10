import ListItem from "./ListItem";
import List from "@mui/material/List";

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <List component="nav">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}
