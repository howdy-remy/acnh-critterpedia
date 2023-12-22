import {
  Links,
  Navigation,
  NavigationWrapper,
  StyledNavLink,
  PageTitle,
} from "./Nav.styled";

export const NavBar = () => (
  <NavigationWrapper>
    <Navigation>
      <PageTitle>Animal Crossing New Horizons: A Field Guide</PageTitle>
      <Links>
        <StyledNavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          fish
        </StyledNavLink>
        <StyledNavLink
          to="/bugs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          bugs
        </StyledNavLink>
        <StyledNavLink
          to="/sea-creatures"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          sea creatures
        </StyledNavLink>
      </Links>
    </Navigation>
  </NavigationWrapper>
);
