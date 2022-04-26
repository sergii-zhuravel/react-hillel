import AlbumListItem from "../AlbumListItem/AlbumListItem";

function AlbumsList({ list }) {
  return (
    <ul>
      {list.map((album) => (
        <AlbumListItem key={album.id} item={album} />
      ))}
    </ul>
  );
}

export default AlbumsList;
