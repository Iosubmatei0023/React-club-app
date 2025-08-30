import React from "react";
import "./Cards.css";
import PBF_v1 from "../../assets/PBF_v1.jpg";
import coach1 from "../../assets/coach1.jpg";

const Cards = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="card-list">
          <div className="card">
            <div className="card-image">
              <img src={PBF_v1} alt="Program" />
              <p className="card-tag"> Baschet feminin </p>
            </div>

            <div className="card-content">
              <h3 className="card-title">Program baschet feminin</h3>
              <p className="card-text">
                Cel mai bun program de baschet feminin din oras.
              </p>

              <div className="card-footer">
                <div className="card-profile">
                  <img src={coach1} alt="Antrenor" />

                  <div className="card-profile-info">
                    <span className="card-profile-name">Antrenor</span>
                    <span className="card-profile-role">
                      Antrenor principal
                    </span>
                  </div>
                </div>

                <a href="#" className="card-button">
                  Vezi detalii
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
