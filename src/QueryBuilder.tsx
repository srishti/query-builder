import React from "react";
import Modal from "./components/layout/Modal/Modal";
import QueryString from "./components/QueryString/QueryString";
import FilterGroup from "./components/FilterGroup/FilterGroup";
import Button from "./components/UI/Button/Button";
import styles from "./QueryBuilder.module.scss";

interface QueryBuilderComponent {
  onCloseModal: React.MouseEventHandler;
}

const QueryBuilder: React.FC<QueryBuilderComponent> = (props) => {
  return (
    <Modal onClose={props.onCloseModal}>
      <div className={styles["query-builder"]}>
        <QueryString />
        <main className={styles["filter-group-container"]}>
          <FilterGroup />
        </main>
        <footer className={styles["query-builder-modal-actions"]}>
          <Button secondary onClick={props.onCloseModal}>
            Back
          </Button>
          <Button>Finish</Button>
        </footer>
      </div>
    </Modal>
  );
};

export default QueryBuilder;
