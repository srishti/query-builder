import React from "react";
import ReactDOM from "react-dom";
import { UiModal } from "../../UI/UIComponents";
import ModalOverlay from "./ModalOverlay";
import Backdrop from "./Backdrop";

const Modal: React.FC<UiModal> = (props) => {
  const overlayDomElement = document.getElementById("overlay");
  if (overlayDomElement instanceof Element) {
    return (
      <>
        {ReactDOM.createPortal(
          <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
          document.getElementById("overlay")!
        )}
        {ReactDOM.createPortal(
          <Backdrop onClick={props.onClose} />,
          document.getElementById("overlay")!
        )}
      </>
    );
  }
  return null;
};

export default Modal;
