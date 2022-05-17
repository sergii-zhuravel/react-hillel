import { Link } from "react-router-dom";
import Loading from "../components/common/Loading";
import UsersList from "../components/Users/UsersList/UsersList";
import useUsers from "../hooks/useUsers";

function UsersPage() {
  const { users, isLoading } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      <span>{"<"}</span> <Link to={"/"}>Dashboard</Link>
      {isLoading ? <Loading /> : <UsersList list={users} />}
    </div>
  );
}

export default UsersPage;
