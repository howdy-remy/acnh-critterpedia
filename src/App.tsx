// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CritterContextProvider } from "./context/CritterContext";
// general
import { Layout } from "./Layout";
import theme from "./theme";
// pages
import { Fish } from "./pages/Fish";
import { Bugs } from "./pages/Bugs";
import { SeaCreatures } from "./pages/SeaCreatures";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Fish />,
        },
        {
          path: "/bugs",
          element: <Bugs />,
        },
        {
          path: "/sea-creatures",
          element: <SeaCreatures />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CritterContextProvider>
        <RouterProvider router={router} />
      </CritterContextProvider>
    </ThemeProvider>
  );
}

export default App;
