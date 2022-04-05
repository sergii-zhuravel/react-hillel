function TodoFilter({ filter, setFilter }) {
  function onChange(e) {
    setFilter(e.target.value);
  }
  return (
    <select
      style={{ padding: 10, margin: 10 }}
      value={filter}
      onChange={onChange}
    >
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="notdone">Not Done</option>
    </select>
  );
}

export default TodoFilter;
