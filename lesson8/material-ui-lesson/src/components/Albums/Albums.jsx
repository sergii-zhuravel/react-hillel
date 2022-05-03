import Loading from "../common/Loading";
import AlbumsList from "./AlbumsList/AlbumsList";
import useAlbums from "../../hooks/useAlbums";
import { Box, Typography } from "@mui/material";

function Albums() {
  const { albums, isLoading } = useAlbums();

  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <h1>Albums</h1>
      {isLoading ? <Loading /> : <AlbumsList list={albums} />}
    </Box>
  );
}

export default Albums;
