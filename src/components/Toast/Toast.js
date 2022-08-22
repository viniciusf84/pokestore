import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faBomb,
  faCheckCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

import { useToast } from "../../../hooks/toast";
import { Container } from "./Toast.styled";

const icons = {
  info: faInfo,
  error: faBomb,
  success: faCheckCircle,
};

const Toast = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      <FontAwesomeIcon icon={icons[message.type || "info"]} size={24} />

      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>

        <button onClick={() => removeToast(message.id)} type="button">
          <FontAwesomeIcon icon={faWindowClose} size={18} />
        </button>
      </div>
    </Container>
  );
};

export default Toast;
