import React from "react";

function GalleryImages(props) {
  console.log(props.images);
  return (
    <ul className="gallery-field">
      {props.images.map((image) => (
        <li className="gallery-image">
          <img src={image.url} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}

export default GalleryImages;
