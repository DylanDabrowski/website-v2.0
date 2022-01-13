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
          <LinkR to="/" className="nav__logo">
            dd
          </LinkR>
          {/* <div className="nav__mobileicon" onClick={toggle}>
            <FaBars />
          </div> */}
          <div className="nav__menu">
            <LinkS to="projects" className="nav__link" smooth={true}>
              Projects
            </LinkS>
            <LinkS to="/" className="nav__link" smooth={true}>
              Blog
            </LinkS>
            <LinkS to="/" className="nav__link" smooth={true}>
              Contact
            </LinkS>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
