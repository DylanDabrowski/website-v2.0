import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo">
            dd
          </Link>
          {/* <div className="nav__mobileicon" onClick={toggle}>
            <FaBars />
          </div> */}
          <div className="nav__menu">
            <Link to="/" className="nav__link">
              Services
            </Link>
            <Link to="/" className="nav__link">
              Travel
            </Link>
            <Link to="/" className="nav__link">
              Penis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
