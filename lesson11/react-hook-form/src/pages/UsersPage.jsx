import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import UsersList from "../components/Users/UsersList";
import useUsers from "../hooks/useUsers";

function UsersPage() {
  const { users, isLoading, removeUser } = useUsers();
  const navigate = useNavigate();

  function handleOnSelect(id) {
    navigate(`/users/${id}`);
  }

  return (
    <div>
      <h1>Users</h1>
      <span>{"<"}</span> <Link to={"/"}>Dashboard</Link>
      {isLoading ? (
        <Loading />
      ) : (
        <UsersList
          list={users}
          removeUser={removeUser}
          onSelect={handleOnSelect}
        />
      )}
    </div>
  );
}

export default UsersPage;
