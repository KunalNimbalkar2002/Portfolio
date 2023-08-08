import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  // function for hamburger in small screen
  const handleClick = () => setClick(!click);

  // Function for changing the color of navbar after scrolling it
  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", handleColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="porrtfolio-tag">
        <Link to="/home">
          <h1>Portfolio</h1>
        </Link>
      </div>
      <div className="nav-menu-div">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
