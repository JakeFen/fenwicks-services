import React from "react";
import Swiper from "react-id-swiper";

function GallerySample() {
  const params = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className="gallery-sample-container">
      <div className="container">
        <Swiper {...params}>
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
        </Swiper>
      </div>
    </div>
  );
}

export default GallerySample;
