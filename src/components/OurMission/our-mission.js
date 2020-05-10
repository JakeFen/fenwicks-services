import React from "react";
import { Link } from "react-router-dom";

function OurMission({ link, ...props }) {
  return (
    <div className="mission-container">
      <h3 className="header">
        Our <span className="header-green">Mission</span>
      </h3>
      <p className="paragraph">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      {link && (
        <Link className="header-green" to="about-us">
          Read More!
        </Link>
      )}
    </div>
  );
}

export default OurMission;
