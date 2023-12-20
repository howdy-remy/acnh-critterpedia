import { useCritterContext } from "../context/CritterContext";
import { CrittersWrapper, Critter } from "../components/Critter";

export const Bugs = () => {
  const { bugs } = useCritterContext();

  return (
    <CrittersWrapper>
      {bugs?.map((bug) => (
        <Critter critter={bug} key={bug.number} />
      ))}
    </CrittersWrapper>
  );
};
