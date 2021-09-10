import React, { useContext, useRef, useEffect, useState } from "react";
import QueryBuilderContext from "../../../context/query-builder-context";
import * as utilsHelpers from "../../../utils/helpers";
import * as utilsUiHelpers from "../../../utils/UI/uiHelpers";
import { UiSelectOption } from "../../UI/UIComponents";
import Button from "../../UI/Button/Button";
import Dropdown from "../../UI/Dropdown/Dropdown";
import styles from "./Filter.module.scss";

const Filter = () => {
  const [conditions, setConditions] = useState<string[]>([]);
  const [criteria, setCriteria] = useState<string[]>([]);

  const queryBuilderContext = useContext(QueryBuilderContext);

  const fieldSelectRef = useRef<HTMLSelectElement>(null);

  const filters = queryBuilderContext.filterList!.filters;
  const { currentField, updateCurrentField } = queryBuilderContext;

  useEffect(() => {
    const userSelectedField: string = fieldSelectRef.current!.value;
    const filterData = utilsHelpers.getObjectFromArrayWithKeyValue(
      filters,
      "field",
      userSelectedField
    );
    if (!filterData) {
      return;
    }
    const conditionsForSelectedField = utilsUiHelpers.getAllConditionsForFilter(
      filterData.type
    );
    setConditions(conditionsForSelectedField);

    const criteriaForSelectedFilter = filterData.criteria;
    setCriteria(criteriaForSelectedFilter);
  }, [currentField]);

  if (!filters) {
    return;
  }

  const fields = utilsHelpers.getArrayOfAllValues(filters, "field");

  const getAllFieldsAsOptions = () => {
    let selectOptions: UiSelectOption[] = [
      {
        value: "Select field",
        label: "Select field",
        selected: true,
        disabled: true,
      },
    ];
    for (const field of fields) {
      selectOptions.push({ value: field, label: field });
    }
    return selectOptions;
  };

  const getAllConditionsAsOptions = () => {
    let selectOptions: UiSelectOption[] = [
      {
        value: "Select condition",
        label: "Select condition",
        selected: true,
        disabled: true,
      },
    ];
    for (const condition of conditions) {
      selectOptions.push({ value: condition, label: condition });
    }
    return selectOptions;
  };

  const getAllCriteriaAsOptions = () => {
    let selectOptions: UiSelectOption[] = [
      {
        value: "Select criterion",
        label: "Select criterion",
        selected: true,
        disabled: true,
      },
    ];
    for (const criterion of criteria) {
      selectOptions.push({ value: criterion, label: criterion });
    }
    return selectOptions;
  };

  const setCurrentFieldHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updateCurrentField(event.target.value);
  };

  return (
    <>
      <div className={styles["filter-dropdowns"]}>
        <Dropdown
          className={styles["filter-dropdown"]}
          label={{ value: "Field" }}
          select={{ id: "field", name: "field" }}
          options={getAllFieldsAsOptions()}
          ref={fieldSelectRef}
          onChange={setCurrentFieldHandler}
        />
        <Dropdown
          className={styles["filter-dropdown"]}
          label={{ value: "Condition" }}
          select={{ id: "condition", name: "condition" }}
          options={getAllConditionsAsOptions()}
        />
        <Dropdown
          className={styles["filter-dropdown"]}
          label={{ value: "Criteria" }}
          select={{ id: "criteria", name: "criteria" }}
          options={getAllCriteriaAsOptions()}
        />
      </div>
      <Button className={styles["add-filter-button"]}>+ Add filter</Button>
    </>
  );
};

export default Filter;
