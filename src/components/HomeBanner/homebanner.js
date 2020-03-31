import React from "react";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div className="home-banner-wrapper">
      <ul className="banner-image-wrapper">
        <li>
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h2>Hello image 1</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Link to="/">Read More</Link>
        </li>
        <li>
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h2>Hello image 1</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Link to="/">Read More</Link>
        </li>
        <li>
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h2>Hello image 1</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Link to="/">Read More</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeBanner;
