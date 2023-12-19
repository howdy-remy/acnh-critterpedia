import { ReactNode, createContext, useEffect, useState } from "react";
import { CritterInterface } from "../dataTypes";
import { useFetchNookipedia } from "../hooks/useFetchNookipedia";

export const CritterContext = createContext<{
  fish?: CritterInterface[];
  bugs?: CritterInterface[];
}>({});

export const CritterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // fish ----------------------------------------------------------------------
  const fetchFish = useFetchNookipedia("fish");
  const [fish, setFish] = useState<CritterInterface[]>([]);

  useEffect(() => {
    const getFish = async () => {
      const data = await fetchFish();
      setFish(
        data.sort(
          (a: CritterInterface, b: CritterInterface) => a.number - b.number
        )
      );
    };
    getFish();
  }, []);

  // bugs ----------------------------------------------------------------------
  const fetchBugs = useFetchNookipedia("bugs");
  const [bugs, setBugs] = useState<CritterInterface[]>([]);

  useEffect(() => {
    const getBugs = async () => {
      const data = await fetchBugs();
      setBugs(
        data.sort(
          (a: CritterInterface, b: CritterInterface) => a.number - b.number
        )
      );
    };
    getBugs();
  }, []);

  return (
    <CritterContext.Provider value={{ fish, bugs }}>
      {children}
    </CritterContext.Provider>
  );
};
