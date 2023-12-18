import styled from "styled-components";

export const CritterWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;

  border: 1px solid black;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

export const Flag = styled.svg.attrs<{ $isDonated?: boolean }>({
  width: "37",
  height: "24",
  viewBox: "0 0 37 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  position: absolute;
  left: 0;
  top: 8px;

  & > path {
    fill: ${({ theme: { colors }, $isDonated }) =>
      $isDonated ? colors.mauve : colors.goldenrod};
  }
`;
