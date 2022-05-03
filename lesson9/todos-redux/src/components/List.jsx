import { useDispatch, useSelector } from "react-redux";
import { changeDone } from "../store/actions";

export default function List() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  function handleClick(todo) {
    dispatch(changeDone(todo));
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title} - Done: {todo.isDone ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Old way of useing values from redux store

// function mapStateToProps(state) {
//   return { list: state.todos };
// }
// export default connect(mapStateToProps)(List);
