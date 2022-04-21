import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import SocialLinks from "./SocialLinks";

const Footer = styled.footer`
  background-color: var(--clr-dark);
  padding-block: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 1.5rem 2.5rem;
  }

  @media (min-width: 1200px) {
    padding-inline: 10.3125rem;
  }
`;

const StyledLogo = styled(Logo)`
  path {
    fill: var(--clr-white);
  }
`;

const Links = styled.div`
  padding-block: 2.5rem;

  @media (min-width: 700px) {
    padding-block: 0;
    margin: 0 auto 0 3rem;
  }
`;

const StyledLink = styled(Link)`
  color: var(--clr-white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  line-height: 0.875rem;
  display: block;
  text-align: center;
  transition: opacity 0.3s;

  & + & {
    margin-top: 2rem;
  }

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 700px) {
    display: inline;

    & + & {
      margin-left: 2.625rem;
    }
  }
`;

const GlobalFooter = () => {
  return (
    <Footer>
      <StyledLogo />
      <Links>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/contact">Contact Me</StyledLink>
      </Links>
      <SocialLinks color="light" />
    </Footer>
  );
};

export default GlobalFooter;
