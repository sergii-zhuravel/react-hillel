import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import UsersForm from "../components/Users/Form";
import useUsers from "../hooks/useUsers";

export default function UserEditPage() {
  const { getUser, saveUser, removeUser, isLoading } = useUsers();
  const params = useParams();
  const user = getUser(params.id);
  return (
    <div>
      <h1>User edit</h1>
      {isLoading || !user.id ? (
        <Loading />
      ) : (
        <UsersForm user={user} saveUser={saveUser} deleteUser={removeUser} />
      )}
    </div>
  );
}
