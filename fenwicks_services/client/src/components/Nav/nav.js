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
              <img src={Logo} alt="Company logo" />
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
              <Link
                to="/"
                className={
                  props.activeNavPage === "home"
                    ? "active-nav-page text-decoration-none"
                    : "text-decoration-none"
                }
                value="home"
                onClick={props.navRouting}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                className={
                  props.activeNavPage === "about"
                    ? "active-nav-page text-decoration-none"
                    : "text-decoration-none"
                }
                value="about"
                onClick={props.navRouting}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={
                  props.activeNavPage === "services"
                    ? "active-nav-page text-decoration-none"
                    : "text-decoration-none"
                }
                value="services"
                onClick={props.navRouting}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={
                  props.activeNavPage === "gallery"
                    ? "active-nav-page text-decoration-none"
                    : "text-decoration-none"
                }
                value="gallery"
                onClick={props.navRouting}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  props.activeNavPage === "contact"
                    ? "active-nav-page text-decoration-none"
                    : "text-decoration-none"
                }
                value="contact"
                onClick={props.navRouting}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
