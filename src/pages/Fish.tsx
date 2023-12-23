import { useCritterContext } from "../context/CritterContext";
import {
  CrittersWrapper,
  Critter,
  CrittersOuterWrapper,
} from "../components/Critter";
import { Subtitle } from "../App.styled";

export const Fish = () => {
  const { fish } = useCritterContext();

  return (
    <>
      {/* <Subtitle>Fish</Subtitle> */}
      <CrittersOuterWrapper>
        <CrittersWrapper>
          {fish?.map((fish) => (
            <Critter critter={fish} key={fish.number} />
          ))}
        </CrittersWrapper>
      </CrittersOuterWrapper>
    </>
  );
};
