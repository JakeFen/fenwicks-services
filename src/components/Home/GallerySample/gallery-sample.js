import React from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import GallerySample1 from "../../../images/GallerySample/gallerysample1.jpeg";
import GallerySample2 from "../../../images/GallerySample/gallerysample2.jpeg";
import GallerySample3 from "../../../images/GallerySample/gallerysample3.jpeg";
import GallerySample4 from "../../../images/GallerySample/gallerysample4.jpeg";
import GallerySample5 from "../../../images/GallerySample/gallerysample5.jpeg";

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
          <img src={GallerySample1} alt="image1" />
          <img src={GallerySample2} alt="image2" />
          <img src={GallerySample3} alt="image3" />
          <img src={GallerySample4} alt="image4" />
          <img src={GallerySample5} alt="image5" />
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
