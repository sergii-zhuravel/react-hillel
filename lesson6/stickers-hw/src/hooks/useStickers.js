import Axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://612687da3ab4100017a68fd8.mockapi.io/stickers/";

const EMTPY_STICKER = {
  description: "",
};

export default function useStickers() {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    // api.get().then(({ data }) => setStickers(data));
    Axios.get(URL).then(({ data }) => setStickers(data));
  }, []);

  function addSticker() {
    Axios.post(URL, EMTPY_STICKER, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) => setStickers([...stickers, data]));
  }

  function deleteSticker(id) {
    Axios.delete(URL + id).then(({ data }) => setStickers(data));
    setStickers(stickers.filter((item) => item.id !== id));
  }

  function updateSticker(sticker) {
    Axios.put(URL + sticker.id, sticker, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) =>
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
