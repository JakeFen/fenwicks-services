import React from "react";

function ImageModal(props) {
  return (
    <div class="modal" id="EventModal" tabindex="-1" role="dialog">
      <div class="modal-lg modal-dialog modal-dialog-centered" role="document">
        <img
          className="modal-content"
          src={props.currentUrl}
          alt={props.currentAlt}
        />
      </div>
    </div>
  );
}

export default ImageModal;
