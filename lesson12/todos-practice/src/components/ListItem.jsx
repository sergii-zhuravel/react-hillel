import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

export default function TodoListItem({ todo, toggleTodo, removeTodo }) {
  function handleDeleteActionClick(e) {
    e.preventDefault();
    removeTodo(todo.id);
  }

  function handleItemClick(e) {
    toggleTodo(todo.id);
  }
  return (
    <>
      <ListItem button onClick={handleItemClick}>
        <ListItemIcon>
          {todo.completed ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}
        </ListItemIcon>
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction onClick={handleDeleteActionClick}>
          <DeleteIcon />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
}

// Old way of useing values from redux store

// function mapStateToProps(state) {
//   return { list: state.todos };
// }
// export default connect(mapStateToProps)(List);
