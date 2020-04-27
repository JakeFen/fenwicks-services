import React from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";

function GallerySample() {
  const params = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      989: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="gallery-sample-container">
      <div className="container">
        <h3 className="text-center gallery-sample-header">
          Gallery <span className="header-green">Sample</span>
        </h3>
        <Swiper {...params}>
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
        </Swiper>
        <div className="gallery-button-container">
          <Link className="link-button-green" to="/gallery">
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GallerySample;
