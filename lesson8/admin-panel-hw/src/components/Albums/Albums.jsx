import Loading from "../common/Loading";
import AlbumsList from "./AlbumsList/AlbumsList";
import useAlbums from "../../hooks/useAlbums";

function Albums() {
  const { albums, isLoading } = useAlbums();

  return (
    <div>
      <h1>Albums</h1>
      {isLoading ? <Loading /> : <AlbumsList list={albums} />}
    </div>
  );
}

export default Albums;
