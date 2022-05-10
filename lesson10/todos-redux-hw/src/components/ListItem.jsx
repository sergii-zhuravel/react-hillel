import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";

export default function TodoListItem({ todo, toggleTodo, removeTodo }) {
  // const todos = useSelector((state) => state.todos);

  // const dispatch = useDispatch();

  // function handleClick(todo) {
  //   dispatch(toogleTodo(todo));
  // }

  return (
    <>
      <ListItem button onClick={() => toggleTodo(todo.id)}>
        <ListItemIcon>
          {todo.isDone ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}
        </ListItemIcon>
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction
          onClick={(e) => {
            e.preventDefault();
            removeTodo(todo.id);
          }}
        >
          <DeleteIcon />
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

// Old way of useing values from redux store

// function mapStateToProps(state) {
//   return { list: state.todos };
// }
// export default connect(mapStateToProps)(List);
