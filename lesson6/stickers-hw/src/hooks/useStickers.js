import { useEffect, useState } from "react";

import api from "../api/api";
// const URL = "https://612687da3ab4100017a68fd8.mockapi.io/stickers/";

const EMTPY_STICKER = {
  description: "",
};

export default function useStickers() {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => setStickers(data));
  }, []);

  function addSticker() {
    api
      .post("", EMTPY_STICKER)
      .then(({ data }) => setStickers((stickers) => [...stickers, data]));
  }

  function deleteSticker(id) {
    api.delete(id).then(({ data }) => setStickers(data));
    setStickers(stickers.filter((item) => item.id !== id));
  }

  function updateSticker(sticker) {
    api
      .put(sticker.id, sticker)
      .then(({ data }) =>
        setStickers(
          stickers.map((item) => (item.id === sticker.id ? data : sticker))
        )
      );
  }

  return {
    stickers,
    addSticker,
    deleteSticker,
    updateSticker,
  };
}
