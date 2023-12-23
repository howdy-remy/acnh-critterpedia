import { useCritterContext } from "../context/CritterContext";
import {
  CrittersWrapper,
  Critter,
  CrittersOuterWrapper,
} from "../components/Critter";
import { Subtitle } from "../App.styled";

export const SeaCreatures = () => {
  const { sea } = useCritterContext();

  return (
    <>
      <CrittersOuterWrapper>
        <CrittersWrapper>
          {sea?.map((seaCreature) => (
            <Critter critter={seaCreature} key={seaCreature.number} />
          ))}
        </CrittersWrapper>
      </CrittersOuterWrapper>
    </>
  );
};
