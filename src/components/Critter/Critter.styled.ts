import styled from "styled-components";

export const CritterWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  border: 1px solid black;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
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
