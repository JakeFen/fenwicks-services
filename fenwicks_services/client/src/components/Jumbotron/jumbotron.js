import React, { useState } from "react";
import slideImage1 from "../../images/slideImage1.jpeg";
import slideImage2 from "../../images/slideImage2.jpeg";
import slideImage3 from "../../images/slideImage3.jpeg";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

function Jumbotron() {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30
  };

  return (
    <Swiper {...params}>
      <img src={slideImage1} alt="img1"></img>
      <img src={slideImage2} alt="img2"></img>
      <img src={slideImage3} alt="img3"></img>
    </Swiper>

    //     <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
    //       <div className="hero-slide">
    //         <div
    //           className="slide-image"
    //           data-swiper-parallax={parallaxAmount}
    //           data-swiper-parallax-opacity={parallaxOpacity}
    //         >
    // <img src={slideImage1} alt="image1"/>

    //         </div>
    //       </div>
    //     </Swiper>
    // <div class="swiper-container">
    //   <div class="swiper-wrapper">
    //     <div class="swiper-slide">Slide 1</div>
    //     <div class="swiper-slide">Slide 2</div>
    //     <div class="swiper-slide">Slide 3</div>
    //   </div>
    //   <div class="swiper-pagination"></div>

    //   <div class="swiper-button-prev"></div>
    //   <div class="swiper-button-next"></div>

    //   <div class="swiper-scrollbar"></div>
    // </div>
  );
}

export default Jumbotron;
