import { useCritterContext } from "../context/CritterContext";
import { CrittersWrapper, Critter } from "../components/Critter";

export const SeaCreatures = () => {
  const { sea } = useCritterContext();

  return (
    <CrittersWrapper>
      {sea?.map((seaCreature) => (
        <Critter critter={seaCreature} key={seaCreature.number} />
      ))}
    </CrittersWrapper>
  );
};
