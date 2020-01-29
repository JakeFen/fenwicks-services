import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <div>
                <h1><Link to="/">Fenwicks Services</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about-us">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;