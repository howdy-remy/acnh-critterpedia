import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CritterInterface as CritterI } from "./types";

// create context --------------------------------------------------------------
type CrittersType = {
  fish?: CritterI[];
  bugs?: CritterI[];
  sea?: CritterI[];
};

type CritterContextType = CrittersType & {
  selectedCritter: CritterI | null;
  setSelectedCritter: Dispatch<SetStateAction<CritterI | null>>;
};

export const CritterContext = createContext<CritterContextType | undefined>(
  undefined
);

// context provider ------------------------------------------------------------
export const CritterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedCritter, setSelectedCritter] = useState<CritterI | null>(null);
  const [state, setState] = useState<CrittersType>({});

  // get resources
  const resources = ["fish", "bugs", "sea"];

  const fetchResource = async (url: string) => {
    const response = await fetch(`https://api.nookipedia.com/nh/${url}`, {
      headers: {
        "X-API-KEY": "dfda704b-5968-409b-9221-cc75c7e784f5",
        "Accept-Version": "1.6.0",
      },
    });
    return await response.json();
  };

  useEffect(() => {
    const getResources = async () => {
      resources.map(async (resource) => {
        if (!!state[resource as keyof CrittersType]) return;

        const data: CritterI[] = await fetchResource(resource);
        setState((state) => ({
          ...state,
          [resource]: data.sort((a, b) => a.number - b.number),
        }));
      });
    };
    getResources();
  }, []);

  return (
    <CritterContext.Provider
      value={{ ...state, selectedCritter, setSelectedCritter }}
    >
      {children}
    </CritterContext.Provider>
  );
};

// use context hook ------------------------------------------------------------
export const useCritterContext = () => {
  const context = useContext(CritterContext);
  if (context === undefined) {
    throw new Error(
      "useCritterContext must be used within a CritterContextProvider"
    );
  }
  return context;
};
