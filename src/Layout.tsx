import { Outlet } from "react-router-dom";
import { AppWrapper, ContentWrapper } from "./App.styled";
import { NavBar } from "./components/Nav/Nav";

export const Layout = () => (
  <AppWrapper>
    <NavBar />
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  </AppWrapper>
);
