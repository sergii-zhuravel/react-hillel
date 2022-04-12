import { useState } from "react";

function Sticker({ sticker, onDelete, onSave }) {
  const [description, setDescription] = useState(sticker.description);

  function onValueChange(e) {
    setDescription(e.target.value);
  }

  function saveSticker() {
    onSave({ ...sticker, description });
  }

  return (
    <div style={stickerStyles}>
      <div style={stickerHeaderStyles}>
        <span style={deleteBtnStyles} onClick={onDelete.bind(null, sticker)}>
          x
        </span>
      </div>
      <div style={stickerBodyStyles}>
        <textarea
          name="desctiption"
          style={descriptionInputStyles}
          value={description}
          onChange={onValueChange}
          onBlur={saveSticker}
        ></textarea>
      </div>
    </div>
  );
}

const stickerStyles = {
  width: "200px",
  height: "200px",
  border: "1px solid black",
  backgroundColor: "lightyellow",
  float: "left",
};

const stickerHeaderStyles = {
  padding: "5px",
};

const deleteBtnStyles = {
  cursor: "pointer",
  float: "right",
  fontWeight: "bold",
};

const stickerBodyStyles = {
  padding: "5px",
};

const descriptionInputStyles = {
  width: "180px",
  height: "150px",
};

export default Sticker;
