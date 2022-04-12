import { useEffect, useState } from "react";

import api from "../api/api";

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
    api.delete(id);
    setStickers(stickers.filter((item) => item.id !== id));
  }

  function updateSticker(sticker) {
    api
      .put(sticker.id, sticker)
      .then(({ data }) =>
        setStickers((stickers) =>
          stickers.map((item) => (item.id === sticker.id ? data : item))
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
