import styled from "styled-components";
import { colors, devices } from "../../styles/variables";
import { rem, rgba, transitions } from "polished";

export const ShopListStyled = styled.section`
  .flex {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 0;
    flex-direction: column;

    @media ${devices.tablet} {
      flex-direction: row;
      gap: 1rem;
      padding: 1rem 0;
    }

    li {
      width: 100%;
    }
  }

  .wrapper {
    padding: 0;

    @media ${devices.tablet} {
      padding: 0 30px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${(props) => props.theme.colors.primary};
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${colors.white};
    width: 100%;
    padding: ${rem("16px")};
    font-size: ${rem("16px")};
    cursor: pointer;
    ${transitions("background-color 0.3s ease-in")};

    @media ${devices.tablet} {
      border: 1px solid ${(props) => props.theme.colors.primary};
      justify-content: center;
    }

    svg {
      font-size: ${rem("20px")};
      margin-right: 10px;
    }

    &:hover {
      background-color: ${(props) => rgba(props.theme.colors.primary, 0.1)};
      color: ${colors.white};
    }

    &.active {
      color: ${colors.white};
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;
