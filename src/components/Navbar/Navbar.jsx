import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Your Logo</div>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Services</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
