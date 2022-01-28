import React from "react";
import {
  MobileNavContainer,
  Icon,
  CloseIcon,
  MobileNavWrapper,
  MobileNavMenu,
  MobileNavLinkS,
  MobileNavLinkR,
} from "./MobileNavElements";

export const MobileNav = ({ isOpen, toggle }) => {
  return (
    <MobileNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLinkS to="projects" onClick={toggle}>
            Projects
          </MobileNavLinkS>
          <MobileNavLinkS to="contact" onClick={toggle}>
            Contact
          </MobileNavLinkS>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};
