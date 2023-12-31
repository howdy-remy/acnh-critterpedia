import styled, { css } from "styled-components";

export const CrittersOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const CrittersWrapper = styled.div`
  display: grid;
  justify-content: start;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 100px);

  border: 1px solid black;
  height: 500px;
  width: max-content;
  max-width: 1060px;
  overflow-x: auto;
`;

export const CritterWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid black;

  transition: background-color filter 0.25s ease;

  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;

export const Icon = styled.img<{ $isActive?: boolean }>`
  width: 64px;
  height: 64px;

  transition: opacity 0.25s ease, filter 0.25s ease;

  ${CritterWrapper}:hover > & {
    filter: grayscale(0%);
    opacity: 1;
  }

  ${({ $isActive }) =>
    !$isActive &&
    css`
      filter: grayscale(100%);
      opacity: 0.2;
    `};
`;

export const Flag = styled.svg<{ $isDonated?: boolean }>`
  position: absolute;
  left: 0;
  top: 8px;

  /* & > path {
    fill: ${({ theme: { colors }, $isDonated }) =>
    $isDonated ? colors.mauve : colors.goldenrod};
  } */
`;
