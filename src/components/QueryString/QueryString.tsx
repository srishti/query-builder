import React, { useState } from "react";
import Textbox from "../UI/Textbox/Textbox";
import Button from "../UI/Button/Button";
import styles from "./QueryString.module.scss";

const QueryString = () => {
  return (
    <header className={styles["query-string"]}>
      <Textbox
        input={{
          className: styles["query-string-input"],
          id: "query-string",
          type: "text",
          value: "Query: ",
          disabled: true,
        }}
        label={{
          className: styles["query-string-label"],
          value: "Build your query",
        }}
      />
      <Button className={styles["query-close-button"]} secondary>
        X
      </Button>
    </header>
  );
};

export default QueryString;
