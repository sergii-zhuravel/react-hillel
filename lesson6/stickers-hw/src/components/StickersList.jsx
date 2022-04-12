import Sticker from "./Sticker";

function StickersList({ stickers, onDelete, onSave }) {
  console.log(stickers);
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
