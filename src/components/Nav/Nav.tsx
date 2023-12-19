import { Navigation } from "./Nav.styled";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <Navigation>
    <Link to="/">fish</Link>
    <Link to="/bugs">bugs</Link>
  </Navigation>
);
