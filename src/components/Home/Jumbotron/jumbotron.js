import React from "react";
import { Link } from "react-router-dom";
import slideImage11920w from "../../../images/JumboImages/slide-image1-1920w.jpeg";
import slideImage11080w from "../../../images/JumboImages/slide-image1-1080w.jpeg";
import slideImage1480w from "../../../images/JumboImages/slide-image1-480w.jpeg";
import slideImage21920w from "../../../images/JumboImages/slide-image2-1920w.jpeg";
import slideImage21080w from "../../../images/JumboImages/slide-image2-1080w.jpeg";
import slideImage2480w from "../../../images/JumboImages/slide-image2-480w.jpeg";
import slideImage31920w from "../../../images/JumboImages/slide-image3-1920w.jpeg";
import slideImage31080w from "../../../images/JumboImages/slide-image3-1080w.jpeg";
import slideImage3480w from "../../../images/JumboImages/slide-image3-480w.jpeg";

import Swiper from "react-id-swiper";

function Jumbotron() {
  const params = {
    background: "black",
    loop: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.jumbotron-swiper-button-next",
      prevEl: ".swiper-button-prev.jumbotron-swiper-button-prev",
    },
  };

  return (
    <div className="jumbo-swiper">
      <Swiper {...params}>
        <div className="swiper-slide slideImage1">
          <div className="jumbotron-image-wrapper">
            <img
              src={slideImage11920w}
              srcSet={`${slideImage1480w} 480w, ${slideImage11080w} 1080w, ${slideImage11920w} 1920w`}
              sizes="100vw"
              className="jumbotron-image"
              alt="img3"
            ></img>
          </div>
          <div className="slide-content">
            <div className="slide-text container">
              <h2>Keep your lawn and landscape looking its best</h2>
              <div className="slide-button-container">
                <Link className="link-button-green" to="/about-us">
                  ABOUT US
                </Link>
                <Link className="link-button-trans" to="/contact">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide slideImage2">
          <img
            src={slideImage21920w}
            srcSet={`${slideImage2480w} 480w, ${slideImage21080w} 1080w, ${slideImage21920w} 1920w`}
            sizes="100vw"
            className="jumbotron-image"
            alt="img3"
          ></img>
          <div className="slide-content">
            <div className="slide-text container">
              <h2>We provide great service at an affordable price</h2>
              <div className="slide-button-container">
                <Link className="link-button-green" to="/gallery">
                  GALLERY
                </Link>
                <Link className="link-button-trans" to="/contact">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide slideImage3">
          <img
            src={slideImage31920w}
            srcSet={`${slideImage3480w} 480w, ${slideImage31080w} 1080w, ${slideImage31920w} 1920w`}
            sizes="100vw"
            className="jumbotron-image"
            alt="img3"
          ></img>
          <div className="slide-content">
            <div className="slide-text container">
              <h2>Let us do the work so you don't have to</h2>
              <div className="slide-button-container">
                <Link className="link-button-green" to="/services">
                  SERVICES
                </Link>
                <Link className="link-button-trans" to="/contact">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Jumbotron;
