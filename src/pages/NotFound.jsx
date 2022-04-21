import styled from "styled-components";
import { SecondaryButton } from "../components/Button";

const H1 = styled.h1`
  margin-block: 2rem;
`;

const NotFound = () => {
  return (
    <main>
      <H1>Page not found!</H1>
      <SecondaryButton to="/" text="Go Home" size="8rem" />
    </main>
  );
};

export default NotFound;
