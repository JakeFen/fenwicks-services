import React from "react";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div className="home-banner-wrapper container">
      <ul className="banner-image-wrapper">
        <li className="banner-image">
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h3>Landscaping</h3>
          <p className="paragraph">
            Keep your lawn looking its best with the care it deserves.
          </p>
          <Link className="header-green" to="/services">
            Read More!
          </Link>
        </li>
        <li className="banner-image">
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h3>House Care</h3>
          <p className="paragraph">
            Keep your lawn looking its best with the care it deserves.
          </p>
          <Link className="header-green" to="/services">
            Read More!
          </Link>
        </li>
        <li className="banner-image">
          <img src="https://via.placeholder.com/150x90/" alt="image1" />
          <h3>Snow Removal</h3>
          <p className="paragraph">
            Keep your lawn looking its best with the care it deserves.
          </p>
          <Link className="header-green" to="/services">
            Read More!
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeBanner;
