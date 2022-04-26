import { useCallback, useEffect, useState } from "react";
import { getAlbumsPhotos } from "../services/photosService";

export function useAlbum(albumId) {
  const [photos, setPhotos] = useState([]);
  const [photosAreLoading, setPhotosLoading] = useState(false);

  const getAlbumData = useCallback(() => {
    setPhotosLoading(true);
    getAlbumsPhotos(albumId).then((data) => {
      setPhotos(data);
      setPhotosLoading(false);
    });
  }, [setPhotos, albumId]);

  useEffect(getAlbumData, [setPhotos]);

  return {
    photos,
    photosAreLoading,
  };
}
