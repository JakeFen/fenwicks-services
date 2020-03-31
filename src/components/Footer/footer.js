import React from "react";

function Footer() {
  return (
    <footer>
      <ul className="footer-social-icons">
        <li>
          <a href="/">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <ul className="footer-copyright">
        <li>© 2020 Fenwick's Services LLC</li>
        <li>
          Web developer:{" "}
          <a href="https://jakefen.github.io/Portfolio/">Jacob Fenwick</a>
        </li>
        <li>
          For Questions Call: <a href="tel:4195030994">(419) 503-0994</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
