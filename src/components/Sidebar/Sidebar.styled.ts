import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  width: 400px;
  height: 100vh;
  padding: 64px;
  filter: drop-shadow(0px 0px 22px rgba(0, 0, 0, 0.25));
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;
