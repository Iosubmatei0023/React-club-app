import React from "react";
import "./Cards.css";
import PBF_v1 from "../../assets/PBF_v1.jpg";
import coach1 from "../../assets/coach1.jpg";
import PBM_v1 from "../../assets/PBM_v1.jpg";
import coach2 from "../../assets/coach2.jpg";
import PHM_v1 from "../../assets/PHM_v1.jpg";
import coach3 from "../../assets/coach3.jpg";
import PRF_v1 from "../../assets/PRF_v1.jpg";
import coach4 from "../../assets/coach4.jpg";
import PRA_v1 from "../../assets/PRA_v1.jpg";
import coach5 from "../../assets/coach5.jpg";

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

          <div className="card">
            <div className="card-image">
              <img src={PBM_v1} alt="Program" />
              <p className="card-tag"> Baschet masculin </p>
            </div>

            <div className="card-content">
              <h3 className="card-title">Program baschet masculin</h3>
              <p className="card-text">
                Cel mai bun program de baschet masculin din oras.
              </p>

              <div className="card-footer">
                <div className="card-profile">
                  <img src={coach2} alt="Antrenor" />

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

          <div className="card">
            <div className="card-image">
              <img src={PHM_v1} alt="Program" />
              <p className="card-tag"> Handbal masculin </p>
            </div>

            <div className="card-content">
              <h3 className="card-title">Program handbal masculin</h3>
              <p className="card-text">
                Cel mai bun program de handbal masculin din oras.
              </p>

              <div className="card-footer">
                <div className="card-profile">
                  <img src={coach3} alt="Antrenor" />

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

          <div className="card">
            <div className="card-image">
              <img src={PRF_v1} alt="Program" />
              <p className="card-tag"> Rugby feminin </p>
            </div>

            <div className="card-content">
              <h3 className="card-title">Program rugby feminin</h3>
              <p className="card-text">
                Cel mai bun program de rugby feminin din oras.
              </p>

              <div className="card-footer">
                <div className="card-profile">
                  <img src={coach4} alt="Antrenor" />

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

          <div className="card">
            <div className="card-image">
              <img src={PRA_v1} alt="Program" />
              <p className="card-tag"> Alergat </p>
            </div>

            <div className="card-content">
              <h3 className="card-title">Program alergat</h3>
              <p className="card-text">
                Cel mai bun program de alergat din oras.
              </p>

              <div className="card-footer">
                <div className="card-profile">
                  <img src={coach5} alt="Antrenor" />

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
