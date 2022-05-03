import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../../components/common/Loading";
import UsersList from "../../components/Users/UsersList/UsersList";
import useUsers from "../../hooks/useUsers";

function UsersPage() {
  const { users, removeUser, isLoading } = useUsers();
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={"/"}>Dashboard</Link>
      </Breadcrumbs>
      <h1>Users</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <UsersList list={users} removeUser={removeUser} />
      )}
    </Box>
  );
}

export default UsersPage;
