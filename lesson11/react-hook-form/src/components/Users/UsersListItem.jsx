import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function UsersListItem({ item, removeUser, onSelect }) {
  function handleRowClick(id) {
    onSelect(id);
  }
  function handleDeleteBtnClick(event) {
    event.stopPropagation();
    removeUser(item.id);
  }
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      onClick={() => handleRowClick(item.id)}
    >
      <TableCell component="th" scope="row">
        {item.name}
      </TableCell>
      <TableCell align="right">{item.surname}</TableCell>
      <TableCell align="right">{item.phone}</TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteBtnClick}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default UsersListItem;
