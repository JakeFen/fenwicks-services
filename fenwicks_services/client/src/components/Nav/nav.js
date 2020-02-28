import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <nav>
          <div className="logo-wrapper">
            <h1>
              <Link to="/">Fenwicks Services</Link>
            </h1>
          </div>
          <div>
            <button type="button" className="btn" onClick={props.toggleBurger}>
              MENU
                <span className="burger">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </span>
            </button>
          </div>
          <ul className={props.showUl}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
