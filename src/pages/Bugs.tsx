import { useCritterContext } from "../context/CritterContext";
import {
  CrittersWrapper,
  Critter,
  CrittersOuterWrapper,
} from "../components/Critter";
import { Subtitle } from "../App.styled";

export const Bugs = () => {
  const { bugs } = useCritterContext();

  return (
    <>
      <CrittersOuterWrapper>
        <CrittersWrapper>
          {bugs?.map((bug) => (
            <Critter critter={bug} key={bug.number} />
          ))}
        </CrittersWrapper>
      </CrittersOuterWrapper>
    </>
  );
};
