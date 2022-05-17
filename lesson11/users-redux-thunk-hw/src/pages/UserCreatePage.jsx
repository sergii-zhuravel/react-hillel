import useUsers from "../hooks/useUsers";

export default function UserCreatePage() {
  const { users, isLoading } = useUsers();
  return (
    <div>
      <h1>User create</h1>
    </div>
  );
}
