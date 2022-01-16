import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <div className="nav__logo-container">
            <LinkR to="/" className="nav__logo">
              ❴ ❵
            </LinkR>
          </div>
          <div className="nav__mobileicon" onClick={toggle}>
            <FaBars />
          </div>
          <div className="nav__menu">
            <LinkS to="projects" className="nav__link" smooth={true}>
              Projects
            </LinkS>
            <LinkS to="contact" className="nav__link" smooth={true}>
              Contact
            </LinkS>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
