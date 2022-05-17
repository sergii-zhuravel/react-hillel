import UsersForm from "../components/Users/Form";
import useUsers from "../hooks/useUsers";

export default function UserCreatePage() {
  const { getUser, saveUser, removeUser } = useUsers();
  return (
    <div>
      <h1>User create</h1>
      <UsersForm user={getUser()} saveUser={saveUser} removeUser={removeUser} />
    </div>
  );
}
