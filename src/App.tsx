import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import QueryBuilder from "./QueryBuilder";
import styles from "./App.module.scss";

const App = () => {
  const [isQueryBuilderModalOpen, setIsQueryBuilderModalOpen] = useState(false);

  const openQueryBuilderModalHandler = () => {
    setIsQueryBuilderModalOpen(true);
  };

  const closeQueryBuilderModalHandler = () => {
    setIsQueryBuilderModalOpen(false);
  };

  return (
    <>
      <Button
        className={styles["view-feedback-button"]}
        onClick={openQueryBuilderModalHandler}
      >
        View Feedback
      </Button>
      {isQueryBuilderModalOpen && (
        <QueryBuilder onCloseModal={closeQueryBuilderModalHandler} />
      )}
    </>
  );
};

export default App;
