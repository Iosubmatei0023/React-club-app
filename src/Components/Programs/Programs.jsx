import React from "react";
import "./Programs.css";
import PBF_v1 from "../../assets/PBF_v1.jpg";

const Programs = () => {
  return (
    <div className="programs-row">
      <div className="photo-card">
        <img src={PBF_v1} alt="Program" className="photo-card-img" />
      </div>
      <div className="program-text">
        <h2>Program Title</h2>
        <p>Program description goes here.</p>
      </div>
    </div>
  );
};

export default Programs;
