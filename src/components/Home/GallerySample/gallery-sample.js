import React from "react";
import { Link } from "react-router-dom";
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
        <h2 className="text-center gallery-sample-header">
          Gallery <span>Sample</span>
        </h2>
        <Swiper {...params}>
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
        </Swiper>
        <div className="gallery-button-container">
          <Link className="link-button" to="/gallery">
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GallerySample;
