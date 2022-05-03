import {
  Backdrop,
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
} from "@mui/material";
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
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <UsersList list={users} removeUser={removeUser} />
      )}

      <Button to="create" component={Link}>
        Create User
      </Button>
    </Box>
  );
}

export default UsersPage;
