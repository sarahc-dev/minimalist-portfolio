import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import getImage from "../utils/getImage";
import { SecondaryButton } from "./Button";

const Article = styled.article`
  @media (min-width: 700px) {
    display: flex;
    gap: 69px;
    margin-bottom: 5rem;

    &:nth-child(even) {
      & picture {
        order: 2;
      }
    }
  }

  @media (min-width: 1200px) {
    gap: 125px;

    &:nth-child(odd) {
      margin-right: 95px;
    }
    &:nth-child(even) {
      margin-left: 95px;
  }
`;

const Picture = styled.picture`
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    width: 54.6042%;
  }

  @media (min-width: 700px) {
    width: 54.8%;
  }
`;

const PortfolioText = styled.div`
  padding-block: 1.5rem;
  border-top: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  border-bottom: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  margin-block: 2rem 72px;

  @media (min-width: 700px) {
    margin-block: 0;
    padding-block: 2rem 3.125rem;
    width: 45.3958%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    width: 35.5%;
    padding-right: 1rem;
  }
`;

const P = styled(ReactMarkdown)`
  color: rgba(var(--text), 0.8);
  font-size: 0.9375rem;
  padding-block: 1.5rem;

  @media (min-width: 700px) {
    padding-block: 29px 35px;
  }
`;

const PortfolioItem = ({ name, description, images }) => {
  return (
    <Article>
      <Picture>
        <source media="(min-width: 1200px)" srcSet={`${getImage(images, "portfolio-desktop")} 540w, ${getImage(images, "portfolio-desktop-2x")} 1080w`} />
        <source media="(min-width: 700px)" srcSet={`${getImage(images, "portfolio-tablet")} 339w, ${getImage(images, "portfolio-tablet-2x")} 678w`} />
        <source srcSet={`${getImage(images, "portfolio")} 311w, ${getImage(images, "portfolio-2x")} 622w`} />
        <img src={getImage(images, "portfolio")} alt={`A preview of the ${name} project`} />
      </Picture>
      <PortfolioText>
        <h1>{name}</h1>
        <P>{description}</P>
        <SecondaryButton to={name.toLowerCase()} text="View project" width="10.9375rem" />
      </PortfolioText>
    </Article>
  );
};

export default PortfolioItem;
