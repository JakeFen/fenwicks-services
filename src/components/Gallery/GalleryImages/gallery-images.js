import React from "react";

function GalleryImages(props) {
  return (
    <ul className="gallery-field">
      {props.images.map((image) => (
        <li
          className="gallery-image"
          key={image.key}
          data-toggle={"modal"}
          data-target={"#EventModal"}
          onClick={(event) => props.toggleModal(event)}
        >
          <img src={image.url} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}

export default GalleryImages;
