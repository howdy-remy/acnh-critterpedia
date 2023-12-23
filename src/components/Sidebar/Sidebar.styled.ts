import styled from "styled-components";

export const SidebarWrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;

  width: 400px;
  height: calc(100vh - 80px);
  padding: 40px;
  background-color: white;

  filter: drop-shadow(0px 0px 22px rgba(0, 0, 0, 0.25));
  overflow-y: auto;
`;

// typography
export const SidebarTitle = styled.h2`
  margin: 0 0 16px 0;
  border-bottom: 1px solid black;

  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 40px;
  text-transform: capitalize;
`;

export const ExhibitNumber = styled.p`
  text-align: center;
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  font-size: 18px;
  margin: 8px 0 32px 0;
`;

export const Description = styled.p`
  font-family: "Playfair", serif;
  font-size: 18px;
  margin: 0 0 16px 0;
`;

export const Bold = styled.span`
  font-weight: 700;
  text-transform: lowercase;
`;

export const Catchphrase = styled.p`
  border: solid black;
  border-width: 4px 0;
  padding: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

// assets
export const Spacer = styled.div`
  height: 4px;
  width: 100%;
  background-color: black;
  margin: 32px 0 16px 0;
`;

export const Image = styled.img`
  width: calc(100% - 48px);
  height: 200px;
  padding: 24px;
  border: 1px dotted black;
  object-fit: scale-down;
`;
