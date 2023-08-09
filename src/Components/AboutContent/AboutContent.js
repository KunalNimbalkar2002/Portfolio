import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import top1 from "../../Assets/react-top.jpeg";
import new1 from "../../Assets/new.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a React front-end developer. I create responsive secure websites{" "}
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={top1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={new1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
