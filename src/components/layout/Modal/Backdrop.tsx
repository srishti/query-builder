import React from "react";
import styles from "./Backdrop.module.scss";

interface BackdropComponent {
  onClick: React.MouseEventHandler;
}

const Backdrop: React.FC<BackdropComponent> = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
};

export default Backdrop;
