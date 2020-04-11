import React from "react";
import { Link } from "react-router-dom";
import slideImage1 from "../../images/JumboImages/slide-image1.jpeg";
import slideImage2 from "../../images/JumboImages/slide-image2.jpeg";
import slideImage3 from "../../images/JumboImages/slide-image3.jpeg";
// import Swiper from "react-id-swiper";

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
      {/* <Swiper {...params}>
        <div className="swiper-slide slideImage1">
          <div className="jumbotron-image-wrapper">
            <img src={slideImage1} className="jumbotron-image" alt="img3"></img>
          </div>
          <div className="slide-content">
            <div className="slide-text container">
              <h2>Keep your lawn and landscape looking it's best</h2>
              <div className="slide-button-container">
                <Link className="slide-button" to="/">
                  ABOUT US
                </Link>
                <Link className="slide-button" to="/">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide slideImage2">
          <img src={slideImage2} className="jumbotron-image" alt="img3"></img>
          <div className="slide-content">
            <div className="slide-text container">
              <h2>Keep your lawn and landscape looking it's best</h2>
              <div className="slide-button-container">
                <Link className="slide-button" to="/">
                  GALLERY
                </Link>
                <Link className="slide-button" to="/">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide slideImage3">
          <img src={slideImage3} className="jumbotron-image" alt="img3"></img>
          <div className="slide-content">
            <div className="slide-text container">
              <h2>Keep your lawn and landscape looking it's best</h2>
              <div className="slide-button-container">
                <Link className="slide-button" to="/">
                  SERVICES
                </Link>
                <Link className="slide-button" to="/">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Swiper> */}
    </div>
  );
}

export default Jumbotron;
