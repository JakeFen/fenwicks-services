import React from "react";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div className="home-banner-wrapper">
      <ul className="banner-image-wrapper">
        <li className="banner-image">
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h2>House Care</h2>
          <p>Keep your lawn looking its best with the care it deserves.</p>
          <Link to="/services">Read More</Link>
        </li>
        <li className="banner-image">
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h2>Landscaping</h2>
          <p>Keep your lawn looking its best with the care it deserves.</p>
          <Link to="/services">Read More</Link>
        </li>
        <li className="banner-image">
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h2>Snow Removal</h2>
          <p>Keep your lawn looking its best with the care it deserves.</p>
          <Link to="/services">Read More</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeBanner;
