import { Outlet } from "react-router-dom";
import { AppContainer } from "./App.styled";
import { NavBar } from "./components/Nav/Nav";

export const Layout = () => (
  <AppContainer>
    <NavBar />
    <Outlet />
  </AppContainer>
);
