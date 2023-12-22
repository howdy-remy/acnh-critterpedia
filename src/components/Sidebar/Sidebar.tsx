import { useCritterContext } from "../../context/CritterContext";
import { Image, SidebarWrapper } from "./Sidebar.styled";

export const Sidebar = () => {
  const { selectedCritter, setSelectedCritter } = useCritterContext();

  return (
    <SidebarWrapper>
      {selectedCritter?.name}
      {selectedCritter?.number}
      <Image src={selectedCritter?.render_url} />
    </SidebarWrapper>
  );
};
