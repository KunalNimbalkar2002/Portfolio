import React from "react";
import "./MainImg.css";
import Img from "../../Assets/into-img.jpg";
import { Link } from "react-router-dom";

const MainImg = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="into-img" src={Img} alt="main img" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER. </p>
        <h1>React Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className=" btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainImg;
