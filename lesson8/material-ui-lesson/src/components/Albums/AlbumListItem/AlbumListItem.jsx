import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import AlbumIcon from "@mui/icons-material/Album";

function AlbumListItem({ item }) {
  return (
    <ListItem disablePadding>
      <Link to={String(item.id)}>
        <ListItemButton>
          <ListItemIcon>
            <AlbumIcon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

export default AlbumListItem;
