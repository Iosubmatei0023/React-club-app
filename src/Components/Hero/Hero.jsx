import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark_arrow.svg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Propulsăm performanța
          <br />
          la un alt nivel
        </h1>
        <p>
          Descoperă lumea sportului universitar
          <br />
          și trăiește competiția la intensitate maximă.
        </p>
        <button className="btn get-started">
          Intră în joc
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
