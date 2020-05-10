import React from "react";
import { Link } from "react-router-dom";
import LandscapingImg from "../../../images/HomeBanner/landscaping.jpeg";
import HouseCareImg from "../../../images/HomeBanner/housecare.jpeg";
import GardeningImg from "../../../images/HomeBanner/gardening.jpeg";

function HomeBanner() {
  return (
    <div className="home-banner-wrapper container">
      <ul className="banner-image-wrapper">
        <li className="banner-image">
          <img src={LandscapingImg} alt="Landscaping" />
          <h3>Landscaping</h3>
          <p className="paragraph">
            Keep your lawn looking its best with the care it deserves.
          </p>
          <Link className="header-green" to="/services">
            Read More!
          </Link>
        </li>
        <li className="banner-image">
          <img src={HouseCareImg} alt="House Care" />
          <h3>House Care</h3>
          <p className="paragraph">
            Pressure washing your house is a great way to keep it looking it's
            best.
          </p>
          <Link className="header-green" to="/services">
            Read More!
          </Link>
        </li>
        <li className="banner-image">
          <img src={GardeningImg} alt="Gardening" />
          <h3>Gardening</h3>
          <p className="paragraph">
            Keep your plants looking their best all year-round.
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
