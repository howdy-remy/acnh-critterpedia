import { useContext } from "react";
import { Critters } from "../App.styled";
import { Critter } from "../components/Critter/Critter";
import { CritterContext } from "../context/CritterContext";

export const Fish = () => {
  const { fish } = useContext(CritterContext);

  return (
    <Critters>
      {fish?.map((fish) => (
        <Critter critter={fish} key={fish.number} />
      ))}
    </Critters>
  );
};
