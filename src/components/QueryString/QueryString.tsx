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
    </header>
  );
};

export default QueryString;
