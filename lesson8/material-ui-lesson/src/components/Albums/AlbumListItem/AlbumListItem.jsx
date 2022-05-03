import { Link } from "react-router-dom";

function AlbumListItem({ item }) {
  return (
    <li>
      <Link to={String(item.id)}>{item.title}</Link>
    </li>
  );
}

export default AlbumListItem;
