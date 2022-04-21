import styled from "styled-components";
import { ReactComponent as Github } from "../images/icons/github.svg";
import { ReactComponent as Twitter } from "../images/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "../images/icons/linkedin.svg";

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const A = styled.a`
  display: inline-flex;
`;

const StyledGithub = styled(Github)`
  transition: opacity 0.3s;

  &.light {
    path {
      fill: var(--clr-white);
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;

const StyledTwitter = styled(Twitter)`
  transition: opacity 0.3s;

  &.light {
    path {
      fill: var(--clr-white);
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;

const StyledLinkedIn = styled(LinkedIn)`
  transition: opacity 0.3s;

  &.light {
    path {
      fill: var(--clr-white);
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;

const SocialLinks = ({ color }) => {
  return (
    <SocialsContainer>
      <A href="https://github.com/">
        <StyledGithub className={color === "light" && "light"} />
        <span className="sr-only">Github</span>
      </A>
      <A href="https://twitter.com/">
        <StyledTwitter className={color === "light" && "light"} />
        <span className="sr-only">Twitter</span>
      </A>
      <A href="https://linkedin.com/">
        <StyledLinkedIn className={color === "light" && "light"} />
        <span className="sr-only">LinkedIn</span>
      </A>
    </SocialsContainer>
  );
};

export default SocialLinks;
