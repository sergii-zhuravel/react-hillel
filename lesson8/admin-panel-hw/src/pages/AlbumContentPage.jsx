import { Link, useParams } from "react-router-dom";
import PhotosList from "../components/Albums/PhotosList/PhotosList";
import Loading from "../components/common/Loading";
import { useAlbum } from "../hooks/useAlbum";

function AlbumContentPage() {
  const { albumId } = useParams();
  const { photos, isLoading } = useAlbum(albumId);
  return (
    <div>
      <h1>Album content</h1>
      {isLoading ? <Loading /> : <PhotosList list={photos} />}
    </div>
  );
}

export default AlbumContentPage;
