import { List } from "@mui/material";
import AlbumListItem from "../AlbumListItem/AlbumListItem";

function AlbumsList({ list }) {
  return (
    <List>
      {list.map((album) => (
        <AlbumListItem key={album.id} item={album} />
      ))}
    </List>
  );
}

export default AlbumsList;
