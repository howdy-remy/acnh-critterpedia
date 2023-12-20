import { Title } from "../../App.styled";
import { LinkButton, Links, Navigation } from "./Nav.styled";
import { Link } from "react-router-dom";
import bugIcon from "./bugs.png";
import fishIcon from "./fish.png";
import seaCreatureIcon from "./seaCreatures.png";

export const NavBar = () => (
  <Navigation>
    <Title>Critter Collector</Title>
    <Links>
      <Link to="/">
        <LinkButton>
          <img src={fishIcon} />
        </LinkButton>
      </Link>
      <Link to="/bugs">
        <LinkButton>
          <img src={bugIcon} />
        </LinkButton>
      </Link>
      <Link to="/sea-creatures">
        <LinkButton isSelected>
          <img src={seaCreatureIcon} />
        </LinkButton>
      </Link>
    </Links>
  </Navigation>
);
