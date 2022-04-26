import api from "../api/api";
import { PHOTOS_URI } from "../constants";

export function getAlbumsPhotos(albumId) {
  return api.get(PHOTOS_URI + "?albumId=" + albumId).then((resp) => resp.data);
}
