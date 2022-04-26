import AlbumsList from "../components/Albums/AlbumsList/AlbumsList";
import Loading from "../components/common/Loading";
import useAlbums from "../hooks/useAlbums";
import { Link } from "react-router-dom";

function AlbumsPage() {
  const { albums, isLoading } = useAlbums();
  return (
    <div>
      <h1>Albums</h1>
      <span>{"<"}</span> <Link to={"/"}>Dashboard</Link>
      {isLoading ? <Loading /> : <AlbumsList list={albums} />}
    </div>
  );
}

export default AlbumsPage;
