import { Link } from "react-router-dom";
import Loading from "../components/common/Loading";
import UsersList from "../components/Users/UsersList";
import useUsers from "../hooks/useUsers";

export default function UserEditPage() {
  const { users, isLoading } = useUsers();
  return (
    <div>
      <h1>User edit</h1>
      
    </div>
  );
}
