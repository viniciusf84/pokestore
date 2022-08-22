import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// utils
import SmoothScrollTo from "../../utils/SmoothScrollTo";

// styles
import { ButtonStyled } from "./ScrollButton.styled";

export default function ScrollButton() {
  const smoothScroll = useCallback(() => {
    SmoothScrollTo("header");
  }, []);

  return (
    <ButtonStyled onClick={() => smoothScroll()}>
      <FontAwesomeIcon icon={faArrowUp} />
    </ButtonStyled>
  );
}
