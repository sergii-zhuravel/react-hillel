import { getAlbum } from "../services/photosServices";
import { useCallback, useEffect, useState } from "react";

export function useAlbum(albumId) {
  const [album, setAlbum] = useState([]);
  const [albumIsLoading, setAlbumIsLoading] = useState(false);

  const getAlbumData = useCallback(() => {
    setAlbumIsLoading(true);
    getAlbum(albumId).then(({ data }) => {
      setAlbum(data);
      setAlbumIsLoading(false);
    });
  }, [setAlbum]);

  useEffect(getAlbumData, [setAlbum]);

  return {
    album,
    albumIsLoading,
  };
}
