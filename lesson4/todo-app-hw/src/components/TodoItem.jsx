function getStyle(completed) {
  return completed ? "green" : "yellow";
}

export default function TodoItem(props) {
  const { item } = props;
  const { completed, title, id } = item;
  return (
    <li
      style={{ backgroundColor: getStyle(completed) }}
      onClick={() => props.onItemClick(id)}
    >
      {title}
      <button onClick={() => props.onDeleteButtonClick(id)}>Delete</button>
    </li>
  );
}
