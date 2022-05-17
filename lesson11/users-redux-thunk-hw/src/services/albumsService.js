import api from "../api/api";
import { ALBUMS_URI } from "../constants";

export function getAlbumsList() {
  return api.get(ALBUMS_URI).then((resp) => resp.data);
}
