import styled from "styled-components";

export const CrittersWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 100px);

  border: 1px solid black;
  height: 500px;
  width: max-content;
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
    & > img {
      filter: grayscale(0%);
    }
  }
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  filter: grayscale(100%);
`;

export const Flag = styled.svg<{ $isDonated?: boolean }>`
  position: absolute;
  left: 0;
  top: 8px;

  & > path {
    fill: ${({ theme: { colors }, $isDonated }) =>
      $isDonated ? colors.mauve : colors.goldenrod};
  }
`;
