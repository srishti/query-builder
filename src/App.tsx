import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import { QueryBuilderContextProvider } from "./context/query-builder-context";
import QueryBuilder from "./components/QueryBuilder/QueryBuilder";
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
        <QueryBuilderContextProvider>
          <QueryBuilder onCloseModal={closeQueryBuilderModalHandler} />
        </QueryBuilderContextProvider>
      )}
    </>
  );
};

export default App;
