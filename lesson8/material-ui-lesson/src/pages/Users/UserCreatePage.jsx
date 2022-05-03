import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../../components/common/Loading";
import UserForm from "../../components/Users/UserForm";
import useUser from "../../hooks/useUser";

function UserCreatePage() {
  const { user, saveUser, isLoading } = useUser();
  return (
    <Box>
      <h1>Users</h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={"/"}>Dashboard</Link>
      </Breadcrumbs>
      {isLoading ? <Loading /> : <UserForm user={user} saveUser={saveUser} />}
    </Box>
  );
}

export default UserCreatePage;
