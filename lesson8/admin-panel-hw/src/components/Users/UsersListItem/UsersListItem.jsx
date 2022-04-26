function UsersListItem({ item }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.website}</td>
    </tr>
  );
}

export default UsersListItem;
