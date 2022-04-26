function PhotosList({ list }) {
  return (
    <ul>
      {list.map((photo) => (
        <img key={photo.id} src={photo.thumbnailUrl} />
      ))}
    </ul>
  );
}

export default PhotosList;
