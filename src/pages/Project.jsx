import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import useSingleProject from "../hooks/useSingleProject";
import getImage from "../utils/getImage";
import { SecondaryButton } from "../components/Button";
import ProjectLinks from "../components/ProjectLinks";
import ContactMe from "../components/ContactMe";

const Main = styled.main`
  @media (min-width: 1200px) {
    margin-top: 2.5rem;
  }
`;

const FlexContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: 125px;
    margin-top: 7.1875rem;
  }
`;

const Container = styled.div`
  border-top: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  border-bottom: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  margin-block: 2.5rem 3rem;
  padding-block: 1.5rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    margin-block: 2.5rem;
    padding-block: 2rem;
  }

  @media (min-width: 1200px) {
    display: block;
    margin-block: 0 auto;
    padding-block: 3rem;
    width: 35%;
  }
`;

const Description = styled(ReactMarkdown)`
  font-size: 0.9375rem;
  padding-block: 1.5rem;

  @media (min-width: 700px) {
    grid-row: span 3;
    padding-block: 0;
  }

  @media (min-width: 1200px) {
    margin-bottom: 1.4375rem;
  }
`;

const H1 = styled.h1`
  @media (min-width: 700px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 1.8125rem;
  }
`;

const List = styled.p`
  color: var(--clr-highlight);
  font-size: 0.8125rem;
  font-weight: 700;

  & + & {
    margin-bottom: 1.5rem;

    @media (min-width: 700px) {
      margin-bottom: 1rem;
    }

    @media (min-width: 1200px) {
      margin-block: 1rem 2rem;
    }
  }
`;

const Background = styled(ReactMarkdown)`
  font-size: 0.9375rem;
  padding-block: 1.75rem 2.5rem;

  & a {
    color: inherit;
    text-decoration: underline;
  }
`;

const H3 = styled.h3`
  margin-bottom: 7px;
  @media (min-width: 700px) {
    margin-bottom: 9px;
  }
  @media (min-width: 1200px) {
    margin-bottom: -4px;
  }
`;

const Img = styled.img`
  margin-top: 33px;

  @media (min-width: 700px) {
    margin-top: 31px;
  }

  @media (min-width: 1200px) {
    margin-top: 32px;
  }
`;

const Container2 = styled.div`
  @media (min-width: 1200px) {
    width: 62%;
  }
`;

const Project = () => {
  const params = useParams();
  const [project, isLoading] = useSingleProject(params.project);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (project === null) navigate("/NotFound");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, project]);

  return (
    <Main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <picture>
            <source media="(min-width: 1200px)" srcSet={`${getImage(project.images, "hero-desktop")} 1110w, ${getImage(project.images, "hero-desktop-2x")} 2220w`} sizes="80vw" />
            <source media="(min-width: 700px)" srcSet={`${getImage(project.images, "hero-tablet")} 689w, ${getImage(project.images, "hero-tablet-2x")} 1378w`} sizes="80vw" />
            <source srcSet={`${getImage(project.images, "hero")} 311w, ${getImage(project.images, "hero-2x")} 622w`} sizes="80vw" />
            <img src={getImage(project.images, "hero")} alt={`A preview of the ${project.name} project`} />
          </picture>
          <FlexContainer>
            <Container>
              <H1>{project.name}</H1>
              <Description>{project.description}</Description>
              <div>
                <List>{project.type.join(" / ")}</List>
                <List>{project.language.join(" / ")}</List>
              </div>

              <SecondaryButton to="#" text="Visit website" size="11.125rem" />
            </Container>
            <Container2>
              <h3>Project Background</h3>
              <Background>{project.background}</Background>
              <H3>Static Previews</H3>
              <picture>
                <source media="(min-width: 1200px)" srcSet={`${getImage(project.images, "preview1-desktop")} 635w, ${getImage(project.images, "preview1-desktop-2x")} 1270w`} sizes="50vw" />
                <source media="(min-width: 700px)" srcSet={`${getImage(project.images, "preview1-tablet")} 689w, ${getImage(project.images, "preview1-tablet-2x")} 1378w`} sizes="80vw" />
                <source srcSet={`${getImage(project.images, "preview1")} 311w, ${getImage(project.images, "preview1-2x")} 622w`} sizes="80vw" />
                <Img src={getImage(project.images, "preview1")} alt={`A preview of the ${project.name} project`} />
              </picture>
              <picture>
                <source media="(min-width: 1200px)" srcSet={`${getImage(project.images, "preview2-desktop")} 635w, ${getImage(project.images, "preview2-desktop-2x")} 1270w`} />
                <source media="(min-width: 700px)" srcSet={`${getImage(project.images, "preview2-tablet")} 689w, ${getImage(project.images, "preview2-tablet-2x")} 1378w`} />
                <source srcSet={`${getImage(project.images, "preview2")} 311w, ${getImage(project.images, "preview2-2x")} 622w`} />
                <Img src={getImage(project.images, "preview2")} alt={`A preview of the ${project.name} project`} />
              </picture>
            </Container2>
          </FlexContainer>
          <ProjectLinks currentProject={params.project} />
          <ContactMe />
        </>
      )}
    </Main>
  );
};

export default Project;
