import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Fish } from "./dataTypes";
import { Critter } from "./components/Critter/Critter";
import { Critters } from "./App.styled";
import theme from "./theme";

function App() {
  const [fish, setFish] = useState<Fish[]>([]);
  useEffect(() => {
    const getFish = async () => {
      const res = await fetch("https://api.nookipedia.com/nh/fish", {
        headers: {
          "X-API-KEY": "dfda704b-5968-409b-9221-cc75c7e784f5",
          "Accept-Version": "1.6.0",
        },
      });
      const data = await res.json();
      setFish(data.sort((a: Fish, b: Fish) => a.number - b.number));
    };
    getFish();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Critters>
        {fish.map((fish) => (
          <Critter critter={fish} key={fish.number} />
        ))}
      </Critters>
    </ThemeProvider>
  );
}

export default App;
