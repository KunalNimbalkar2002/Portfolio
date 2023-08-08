import React from "react";
import "./WorkCard.css";
import pro1 from "../../Assets/pro1.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
      <img src={pro1} alt="imagee" />

      <div className="pro-details">
        <h2 className="project-title">Project title</h2>
        <p>This is text</p>
        <div className="pro-btns">
          <NavLink to="url.com" className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
