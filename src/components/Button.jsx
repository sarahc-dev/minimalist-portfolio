import styled from "styled-components";
import { Link } from "react-router-dom";

const BaseStyle = styled(Link)`
  font-size: 0.75rem;
  height: 3rem;
  line-height: 0.875rem;
  letter-spacing: 2px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: ${(width) => width};
`;

const Primary = styled(BaseStyle).attrs({ as: "a" })`
  display: flex;
`;

const Arrows = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3rem;
  z-index: 2;
`;

const InnerButton = styled.div`
  background-color: var(--clr-button);
  color: var(--clr-white);
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &::before {
    content: "";
    height: 3rem;
    width: calc(3rem + 1px);
    background-color: var(--clr-button);
    position: absolute;
    left: 0;
    transition: all 0.3s;

    ${Primary}:hover & {
      background-color: var(--clr-highlight);
    }
  }

  ${Primary}:hover & {
    background-color: var(--clr-highlight);
  }
`;

const Svg = styled.svg`
  g {
    transition: stroke 0.3s;
  }

  ${Primary}:hover & {
    g {
      stroke: var(--clr-white);
    }
  }
`;

const Secondary = styled(BaseStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--clr-dark);
  color: var(--clr-dark);
  transition: all 0.3s;

  &:hover {
    background-color: var(--clr-dark);
    color: var(--clr-white);
  }
`;

export const PrimaryButton = ({ to, text, width }) => {
  return (
    <Primary href={to} width={width}>
      <Arrows>
        <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
          <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
            <path d="M0 9l8 4 8-4" />
            <path opacity=".5" d="M0 5l8 4 8-4" />
            <path opacity=".25" d="M0 1l8 4 8-4" />
          </g>
        </Svg>
      </Arrows>
      <InnerButton>{text}</InnerButton>
    </Primary>
  );
};

export const SecondaryButton = ({ to, text, width }) => {
  return (
    <Secondary to={to} width={width}>
      {text}
    </Secondary>
  );
};
