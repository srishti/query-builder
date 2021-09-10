import React from "react";
import { UiModal } from "../../UI/UIComponents";
import Button from "../../UI/Button/Button";
import styles from "./ModalOverlay.module.scss";

const ModalOverlay: React.FC<UiModal> = (props) => {
  return (
    <div className={styles["overlay"]}>
      <Button className={styles["modal-close-button"]} onClick={props.onClose}>
        X
      </Button>
      {props.children}
    </div>
  );
};

export default ModalOverlay;
