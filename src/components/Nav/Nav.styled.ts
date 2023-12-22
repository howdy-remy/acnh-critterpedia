import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;

  background-color: #000000;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Navigation = styled.nav`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr max-content;
  gap: 24px;

  width: 80vw;
  max-width: 1060px;
  height: 64px;
  padding: 0 64px;
  background-color: #000000;
`;

export const PageTitle = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  font-size: 18px;
  font-style: italic;
  color: #ffffff;
  margin: 0;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0;
  color: #ffffff;

  font-family: "IBM Plex Mono", monospace;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
  &:hover:not(.active) {
    font-style: italic;
    text-transform: lowercase;
  }
`;
