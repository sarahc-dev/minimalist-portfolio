import styled from "styled-components";
import { SecondaryButton } from "./Button";

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  padding-block: 0.5rem 5rem;
  text-align: center;

  @media (min-width: 700px) {
    flex-direction: row;
    gap: 2rem;
    padding-block: 1rem 6rem;
    position: relative;
    justify-content: space-between;
    text-align: left;
  }

  @media (min-width: 1200px) {
    padding-block: 4.375rem 9.375rem;
  }
`;

const H2 = styled.h2`
  @media (min-width: 700px) {
    max-width: 21.875rem;
  }
`;

const Decoration = styled.div`
  border-top: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  flex: 1;
`;

const ContactMe = () => {
  return (
    <Contact>
      <H2>Interested in doing a project together?</H2>
      <Decoration></Decoration>
      <SecondaryButton to="/contact" text="Contact Me" width="10.125rem" />
    </Contact>
  );
};

export default ContactMe;
