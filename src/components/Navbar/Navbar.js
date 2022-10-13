import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";

const Navbar = ({ toggle, hasSlideLinks }) => {
  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <div className="nav__logo-container">
            <LinkR to="/" className="nav__logo">
              ❴ ❵
              {/* <img src={Logo} alt="logo" className="nav__logo-icon" /> */}
            </LinkR>
          </div>

          <div
            className="nav__mobileicon"
            onClick={toggle}
            style={{ display: hasSlideLinks ? "" : "none" }}
          >
            <FaBars />
          </div>
          <div
            className="nav__menu"
            style={{ display: hasSlideLinks ? "" : "none" }}
          >
            <LinkS to="work" className="nav__link" smooth={true}>
              Work
            </LinkS>
            <LinkS to="skills" className="nav__link" smooth={true}>
              Skills
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
