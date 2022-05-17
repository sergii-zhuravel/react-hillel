import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function UsersListItem({ item, removeUser }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {item.name}
      </TableCell>
      <TableCell align="right">{item.phone}</TableCell>
      <TableCell align="right">{item.email}</TableCell>
      <TableCell align="right">{item.website}</TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => removeUser(item.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default UsersListItem;
