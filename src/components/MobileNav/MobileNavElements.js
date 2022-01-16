import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const MobileNavContainer = styled.aside`
  /* border: solid 1px black; */
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #27a770;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "95%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileNavWrapper = styled.div`
  /* border: solid 1px black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MobileNavMenu = styled.ul`
  /* border: solid 1px black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MobileNavLink = styled(LinkS)`
  /* border: solid 1px black; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: 0ms.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  padding: 20px;
  width: 100%;

  &:hover {
    color: black;
    transition: 0.2s ease-in-out;
  }
`;
