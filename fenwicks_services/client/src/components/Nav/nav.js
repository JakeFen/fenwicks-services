import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/fenwicks_services_logo2.png";

function Nav(props) {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <nav className="navbar">
          <div className="logo-wrapper">
            <Link to="/" className="logo">
              <img src={Logo} />
            </Link>
          </div>
          <button
            type="button"
            className="btn menu-button"
            onClick={props.toggleBurger}
          >
            MENU
            <span className="burger">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </span>
          </button>
          <ul className={props.showUl}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about-us" className="text-decoration-none">About Us</Link>
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
