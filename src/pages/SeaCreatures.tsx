import { useCritterContext } from "../context/CritterContext";
import { CrittersWrapper, Critter } from "../components/Critter";
import { Subtitle } from "../App.styled";

export const SeaCreatures = () => {
  const { sea } = useCritterContext();

  return (
    <>
      <Subtitle>Sea Creatures</Subtitle>

      <CrittersWrapper>
        {sea?.map((seaCreature) => (
          <Critter critter={seaCreature} key={seaCreature.number} />
        ))}
      </CrittersWrapper>
    </>
  );
};
