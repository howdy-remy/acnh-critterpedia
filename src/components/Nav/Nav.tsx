import { Title } from "../../App.styled";
import { LinkButton, Links, Navigation } from "./Nav.styled";
import { NavLink } from "react-router-dom";
import bugIcon from "./bugs.png";
import fishIcon from "./fish.png";
import seaCreatureIcon from "./seaCreatures.png";

export const NavBar = () => (
  <Navigation>
    <Title>Critter Collector</Title>
    <Links>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <LinkButton>
          <img src={fishIcon} />
        </LinkButton>
      </NavLink>
      <NavLink
        to="/bugs"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <LinkButton>
          <img src={bugIcon} />
        </LinkButton>
      </NavLink>
      <NavLink
        to="/sea-creatures"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <LinkButton>
          <img src={seaCreatureIcon} />
        </LinkButton>
      </NavLink>
    </Links>
  </Navigation>
);
