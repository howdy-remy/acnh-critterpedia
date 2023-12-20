import styled from "styled-components";

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;

  width: calc(100vw - 128px);
  height: 64px;
  padding: 0 64px;
  background-color: #4c3c33;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: end;
`;

export const LinkButton = styled.div<{ isSelected?: boolean }>`
  position: relative;
  top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  width: 64px;
  border-radius: 50%;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.goldenrod : theme.colors.tan};

  transition: background-color 0.25s ease;
  &:hover {
    background-color: white;
  }
  & > img {
    height: 48px;
    width: 48px;
  }
`;
