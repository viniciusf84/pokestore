import React from "react";
import { ModalStyled } from "./Modal.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function Modal({
  displayModal = true,
  setDisplayModal,
  children,
}) {
  return (
    displayModal && (
      <ModalStyled>
        <div className="content">
          <header className="modal-header">
            <FontAwesomeIcon
              icon={faWindowClose}
              onClick={() => setDisplayModal(false)}
            />
          </header>
          {children}
        </div>
      </ModalStyled>
    )
  );
}
