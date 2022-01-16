import React from "react";
import {
  MobileNavContainer,
  Icon,
  CloseIcon,
  MobileNavWrapper,
  MobileNavMenu,
  MobileNavLink,
} from "./MobileNavElements";

export const MobileNav = ({ isOpen, toggle }) => {
  return (
    <MobileNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink to="projects" onClick={toggle}>
            Projects
          </MobileNavLink>
          <MobileNavLink to="contact" onClick={toggle}>
            Contact
          </MobileNavLink>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};
