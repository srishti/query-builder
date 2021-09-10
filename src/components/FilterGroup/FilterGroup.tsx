import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./FilterGroup.module.scss";

const FilterGroup = () => {
  return (
    <div className={styles["filter-group"]}>
      <Card>Filter</Card>
      <Button className={styles["add-filter-group-button"]}>
        + Add new filter group
      </Button>
    </div>
  );
};

export default FilterGroup;
