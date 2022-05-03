import { Button, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../../services/usersService";

function UsersListItem({ item, removeUser }) {
  const navigate = useNavigate();
  function onDeleteBtnClick() {
    removeUser(item.id);
  }
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.phone}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.website}</TableCell>
      <TableCell>
        <Button onClick={() => navigate(item.id.toString())}>Edit</Button>
        <Button color="error" onClick={onDeleteBtnClick}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default UsersListItem;
