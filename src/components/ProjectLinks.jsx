import styled from "styled-components";
import useProjects from "../hooks/useProjects";
import { Link } from "react-router-dom";
import ArrowLeft from "../images/icons/arrow-left.svg";
import ArrowRight from "../images/icons/arrow-right.svg";

const Container = styled.div`
  margin-block: 4rem 3.5rem;
  border-top: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  border-bottom: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  display: flex;

  & a {
    text-decoration: none;
  }

  @media (min-width: 700px) {
    margin-block: 5rem 4rem;
  }
`;

const ChildContainer = styled.div`
  width: 100%;

  & + & {
    border-left: 1px solid rgba(var(--clr-rgb-dark), 0.15);
    direction: rtl;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-block: 1.5rem;
  color: rgba(var(--clr-rgb-dark), 0.5);
  cursor: pointer;
`;

const Project = styled.p`
  font-family: var(--ff-heading);
  font-size: 2rem;
  color: var(--clr-dark);
  letter-spacing: -0.285714px;
  line-height: 2.25rem;
  padding-top: 1rem;
`;

const ProjectLinks = ({ currentProject }) => {
  const [projects, isLoading] = useProjects();

  let currentIndex, previous, next;

  if (!isLoading) {
    currentIndex = projects.findIndex((element) => element.name === currentProject[0].toUpperCase() + currentProject.slice(1));
    previous = (currentIndex + projects.length - 1) % projects.length;
    next = (currentIndex + 1) % projects.length;
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <Container>
      <ChildContainer>
        <StyledLink to={`/portfolio/${projects[previous].name.toLowerCase()}`}>
          <img src={ArrowLeft} alt="Left arrow" />
          <div>
            <Project>{projects[previous].name}</Project>
            <p>Previous Project</p>
          </div>
        </StyledLink>
      </ChildContainer>
      <ChildContainer>
        <StyledLink to={`/portfolio/${projects[next].name.toLowerCase()}`}>
          <img src={ArrowRight} alt="Right arrow" />
          <div>
            <Project>{projects[next].name}</Project>
            <p>Next Project</p>
          </div>
        </StyledLink>
      </ChildContainer>
    </Container>
  );
};

export default ProjectLinks;
