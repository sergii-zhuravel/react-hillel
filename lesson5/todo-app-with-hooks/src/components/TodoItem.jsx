function getStyle(completed) {
  return completed ? "#198754" : "#ffc107";
}

export default function TodoItem({ item, onItemClick, onDeleteButtonClick }) {
  const { completed, title, id } = item;
  const onDeleteBtnClick = (e) => {
    e.stopPropagation();
    onDeleteButtonClick(id);
  };
  return (
    <li
      className="row"
      style={{ backgroundColor: getStyle(completed) }}
      onClick={() => onItemClick(id)}
    >
      <div className="col">{title}</div>
      <div className="col">
        <button className="btn btn-outline-dark" onClick={onDeleteBtnClick}>
          Delete
        </button>
      </div>
    </li>
  );
}
