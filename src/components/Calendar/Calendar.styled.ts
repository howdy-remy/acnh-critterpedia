import styled, { css } from "styled-components";

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 36px);
  grid-gap: 2px;
`;

export const Month = styled.div<{ isActive?: boolean }>`
  display: grid;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #bdbdbd;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: black;
      color: white;
    `};
`;
