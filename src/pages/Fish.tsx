import { useCritterContext } from "../context/CritterContext";
import { CrittersWrapper, Critter } from "../components/Critter";

export const Fish = () => {
  const { fish } = useCritterContext();

  return (
    <CrittersWrapper>
      {fish?.map((fish) => (
        <Critter critter={fish} key={fish.number} />
      ))}
    </CrittersWrapper>
  );
};
