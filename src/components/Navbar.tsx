import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="large-nav">
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Stories</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <ul className="mobile-nav">
        <li>Home</li> |<li className="active">Shop</li>
      </ul>
    </nav>
  );
}
