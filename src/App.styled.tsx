import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-areas: "nav body";
  grid-gap: 40px;
  min-height: 100vh;
`;

export const Critters = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 100px);

  border: 1px solid black;
  height: 500px;
  width: 80vw;
  overflow-x: auto;
`;
