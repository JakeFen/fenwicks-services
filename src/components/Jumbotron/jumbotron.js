import React from "react";
import { Link } from "react-router-dom";
import slideImage1 from "../../images/slide-image1.jpeg";
import slideImage2 from "../../images/slide-image2.jpeg";
import slideImage3 from "../../images/slide-image3.jpeg";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

function Jumbotron() {
  const params = {
    loop: true,
    autoplay: {
      delay: 6000
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  return (
    <Swiper {...params}>
      <div className="swiper-slide slideImage1">
        <div className="jumbotron-image-wrapper">
        <img src={slideImage1} className="jumbotron-image" alt="img3"></img>
        </div>
        <div className="slide-content">
          <div className="slide-text">
            <h2>
              Keep your lawn and landscape
              looking it's best
            </h2>
            <div className="slide-button-container">
              <Link className="slide-button" to="/">
                ABOUT US
              </Link>
              <Link className="slide-button" to="/">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide slideImage2">
        <img src={slideImage2} className="jumbotron-image" alt="img3"></img>
        <div className="slide-content">
          <div className="slide-text">
            <h2>
              Keep your lawn and landscape
              looking it's best
            </h2>
            <div className="slide-button-container">
              <Link className="slide-button" to="/">
                GALLERY
              </Link>
              <Link className="slide-button" to="/">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide slideImage3">
        <img src={slideImage3} className="jumbotron-image" alt="img3"></img>
        <div className="slide-content">
          <div className="slide-text">
            <h2>
              Keep your lawn and landscape
              looking it's best
            </h2>
            <div className="slide-button-container">
              <Link className="slide-button" to="/">
                SERVICES
              </Link>
              <Link className="slide-button" to="/">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Swiper>
  );
}

export default Jumbotron;
