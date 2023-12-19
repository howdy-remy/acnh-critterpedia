import "./App.css";
import { ThemeProvider } from "styled-components";
import { AppContainer } from "./App.styled";
import theme from "./theme";
import { Navigation } from "./components/Nav/Nav.styled";
import { Fish } from "./pages/Fish";
import { CritterContextProvider } from "./context/CritterContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bugs } from "./pages/Bugs";
import { Layout } from "./Layout";

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
