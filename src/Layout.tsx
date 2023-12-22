import { Outlet } from "react-router-dom";
import { AppWrapper, ContentWrapper } from "./App.styled";
import { NavBar } from "./components/Nav/Nav";
import { useCritterContext } from "./context/CritterContext";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const Layout = () => {
  const { selectedCritter, setSelectedCritter } = useCritterContext();
  return (
    <AppWrapper>
      <NavBar />
      <ContentWrapper>
        <Outlet />
        {/* {selectedCritter && <Sidebar />} */}
      </ContentWrapper>
    </AppWrapper>
  );
};
