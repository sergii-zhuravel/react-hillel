import { useEffect, useState } from "react";
import { getAlbumsList } from "../services/albumsService";
import { useBooleanFlag } from "./common";

export default function useAlbums() {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, toggleIsLoading] = useBooleanFlag(false);

  useEffect(() => {
    toggleIsLoading(true);
    setError(null);
    getAlbumsList()
      .then((data) => setAlbums(data))
      .catch((err) => setError(err))
      .finally(() => toggleIsLoading(false));
  }, []);

  return {
    albums,
    isLoading,
    error,
  };
}
