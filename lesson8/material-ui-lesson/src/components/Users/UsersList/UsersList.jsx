import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import UsersListItem from "../UsersListItem/UsersListItem";

function UsersList({ list, removeUser }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Website</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((user) => (
          <UsersListItem key={user.id} item={user} removeUser={removeUser} />
        ))}
      </TableBody>
    </Table>
  );
}

export default UsersList;
