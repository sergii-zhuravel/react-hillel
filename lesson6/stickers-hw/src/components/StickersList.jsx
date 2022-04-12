import Sticker from "./Sticker";

function StickersList({ stickers, onDelete, onSave }) {
  return (
    <div>
      {stickers.map((item) => (
        <Sticker
          key={item.id}
          sticker={item}
          onDelete={onDelete}
          onSave={onSave}
        />
      ))}
    </div>
  );
}
export default StickersList;
