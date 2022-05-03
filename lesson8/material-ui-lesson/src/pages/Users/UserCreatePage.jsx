import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../../components/common/Loading";
import UserForm from "../../components/Users/UserForm";
import useUser from "../../hooks/useUser";

// const EMPTY_USER = {
//   name: "",
//   phone: "",
//   email: "",
//   website: "",
// };
function UserCreatePage() {
  // const { users, isLoading } = useUsers();
  const { user, isLoading } = useUser();
  return (
    <Box>
      <h1>Users</h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={"/"}>Dashboard</Link>
      </Breadcrumbs>
      {isLoading ? <Loading /> : <UserForm user={user} />}
    </Box>
  );
}

export default UserCreatePage;
