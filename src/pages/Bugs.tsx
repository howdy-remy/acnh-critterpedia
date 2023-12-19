import { useContext } from "react";
import { Critters } from "../App.styled";
import { Critter } from "../components/Critter/Critter";
import { CritterContext } from "../context/CritterContext";

export const Bugs = () => {
  const { bugs } = useContext(CritterContext);

  return (
    <Critters>
      {bugs?.map((bug) => (
        <Critter critter={bug} key={bug.number} />
      ))}
    </Critters>
  );
};
