import { useCritterContext } from "../context/CritterContext";
import { CrittersWrapper, Critter } from "../components/Critter";
import { Subtitle } from "../App.styled";

export const Bugs = () => {
  const { bugs } = useCritterContext();

  return (
    <>
      <Subtitle>Bugs</Subtitle>

      <CrittersWrapper>
        {bugs?.map((bug) => (
          <Critter critter={bug} key={bug.number} />
        ))}
      </CrittersWrapper>
    </>
  );
};
