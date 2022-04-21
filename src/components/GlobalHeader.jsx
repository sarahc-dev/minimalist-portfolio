import styled from "styled-components";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutside";
import Logo from "../images/logo.svg";
import MenuIcon from "../images/icons/hamburger.svg";
import CloseIcon from "../images/icons/close.svg";

const Header = styled.header`
  padding: 0 2rem 0.5rem;

  @media (min-width: 700px) {
    padding: 4rem 2.5rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    padding: 4rem 10.3125rem 3.375rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  background-color: var(--clr-background);
  position: relative;
  z-index: 2;

  @media (min-width: 700px) {
    padding: 0;
  }
`;

const Button = styled.button`
  background-color: transparent;

  @media (min-width: 700px) {
    display: none;
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 5.5rem;
  right: calc(2rem + 1px);
  text-align: center;
  background-color: var(--clr-dark);
  padding-block: 2.5rem;
  width: 14rem;
  z-index: 1;
  transform: translateY(-11.75rem);
  transition: transform 0.25s;

  &.open {
    transform: translateY(0);
  }

  @media (min-width: 700px) {
    position: static;
    background-color: transparent;
    transform: translateY(0);
    width: unset;
    padding-block: 0;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  color: var(--clr-white);
  font-size: 0.75rem;
  letter-spacing: 2px;
  line-height: 0.875rem;

  & + & {
    margin-top: 2rem;
  }

  @media (min-width: 700px) {
    color: var(--clr-dark);
    display: inline;

    & + & {
      margin-left: 2.625rem;
    }
  }
`;

const Img = styled.img`
  padding-right: ${(props) => (props.open ? "3px" : "0")};
`;

const GlobalHeader = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();
  const navRef = useRef();

  useClickOutside(navRef, buttonRef, () => {
    if (open) setOpen(false);
  });

  return (
    <Header>
      <Container>
        <img src={Logo} alt="Logo - two black triangles" />

        <Button ref={buttonRef} aria-controls="primary-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Img src={open ? CloseIcon : MenuIcon} alt="Menu" isMenuOpen={open} />
        </Button>
      </Container>

      <Nav ref={navRef} id="primary-nav" className={open ? "open" : ""}>
        <StyledLink to="/" onClick={() => setOpen(false)}>
          Home
        </StyledLink>
        <StyledLink to="/portfolio" onClick={() => setOpen(false)}>
          Portfolio
        </StyledLink>
        <StyledLink to="/contact" onClick={() => setOpen(false)}>
          Contact Me
        </StyledLink>
      </Nav>
    </Header>
  );
};

export default GlobalHeader;
