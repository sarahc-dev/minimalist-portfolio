import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { HeroImg, ProfileImg } from "../components/Image";
import ContactMe from "../components/ContactMe";

const Hero = styled.div`
  margin-bottom: 6rem;
  position: relative;

  @media (min-width: 1200px) {
    margin-bottom: 9.375rem;
  }
`;

const HeroText = styled.div`
  @media (min-width: 700px) {
    background-color: var(--clr-background);
    position: absolute;
    bottom: 0;
    width: 74.7093%;
    /* remove fine gray line */
    margin: 0 0 -1px -1px;
    padding: 0 0 1px 1px;
  }

  @media (min-width: 1200px) {
    width: 27.8125rem;
  }
`;

const About = styled.div`
  @media (min-width: 700px) {
    display: flex;
    margin-bottom: 5rem;
  }
`;

const Img = styled.div`
  @media (min-width: 700px) {
    width: 45.3958%;
  }

  @media (min-width: 1200px) {
    width: 48.6486%;
  }
`;

const AboutText = styled.div`
  border-top: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  border-bottom: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  margin-bottom: 4rem;
  padding-block: 2rem 3.25rem;

  @media (min-width: 700px) {
    padding-block: 3.125rem 2.875rem;
    margin-bottom: 0;
    margin-left: 69px;
    width: 54.6042%;
  }

  @media (min-width: 1200px) {
    width: 31.5315%;
    margin-inline: 125px 95px;
  }
`;

const H1 = styled.h1`
  margin-block: 1.5rem 2rem;

  @media (min-width: 700px) {
    margin: 3.5rem 3.5rem 3rem 0;
  }
`;

const P = styled.p`
  padding-block: 1.75rem 1.5rem;
`;

const Home = () => {
  return (
    <main>
      <Hero className="hero">
        <HeroImg />
        <HeroText>
          <H1>Hey, I’m Alex Spencer and I love building beautiful websites</H1>
          <PrimaryButton to="/#about" text="About me" size="12.5rem" />
        </HeroText>
      </Hero>
      <About>
        <Img>
          <ProfileImg />
        </Img>
        <AboutText>
          <h2 id="about">About Me</h2>
          <P>
            I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in
            London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
          </P>
          <SecondaryButton to="/portfolio" text="Go to portfolio" size="12.625rem" />
        </AboutText>
      </About>
      <ContactMe />
    </main>
  );
};

export default Home;
