import Header from "./Header";
import useStickers from "../hooks/useStickers";
import StickersList from "./StickersList";

function StickerPage() {
  const { stickers, addSticker, deleteSticker, updateSticker } = useStickers();

  function addNewSticker() {
    addSticker();
  }
  function onDeleteSticker(sticker) {
    deleteSticker(sticker.id);
  }
  function saveSticker(sticker) {
    updateSticker(sticker);
  }
  return (
    <>
      <Header onAddClick={addNewSticker} />
      <StickersList
        stickers={stickers}
        onDelete={onDeleteSticker}
        onSave={saveSticker}
      />
    </>
  );
}

export default StickerPage;
