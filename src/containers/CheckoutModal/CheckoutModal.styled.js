import styled from "styled-components";
import { rem } from "polished";
import { colors, centerContent } from "../../styles/variables";

export const CheckoutStyled = styled.div`
  ${centerContent()};
  flex-direction: column;
  height: 100%;

  p {
    font-size: ${rem("18px")};
    color: ${colors.text_3};

    margin: 0 0 16px;
    padding: 0 30px;

    &.title {
      font-size: ${rem("22px")};
      font-weight: bold;
      color: ${colors.text_1};
    }

    strong {
      color: ${colors.text_1};
    }
  }
`;
