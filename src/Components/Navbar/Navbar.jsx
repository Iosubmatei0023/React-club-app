import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Despre noi</li>
        <li>Realizări</li>
        <li>Echipa</li>
        <li>Facilități</li>
        <li>
          <button className="btn">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
