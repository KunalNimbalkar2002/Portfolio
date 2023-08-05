import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <div className="porrtfolio-tag">
        <Link to="/home">
          <h1>Portfolio</h1>
        </Link>
      </div>
      <div className="nav-menu">
        <ul className="nav-menu">
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
      <div className="hamburger">
        <FaBars size={20} style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Navbar;
