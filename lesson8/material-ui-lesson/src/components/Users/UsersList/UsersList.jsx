import UsersListItem from "../UsersListItem/UsersListItem";

function UsersList({ list, removeUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user) => (
          <UsersListItem key={user.id} item={user} removeUser={removeUser} />
        ))}
      </tbody>
    </table>
  );
}

export default UsersList;
