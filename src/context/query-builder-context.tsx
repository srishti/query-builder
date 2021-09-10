import React, { useState } from "react";
import { FilterList } from "../components/QueryBuilder/QueryBuilderModel";
import filters from "../data/filters.json";

interface QueryBuilderContextData {
  filterList: FilterList | null;
  currentField: string;
  updateCurrentField: (currentFieldValue: string) => void;
}

const initialQueriesData: QueryBuilderContextData = {
  filterList: null,
  currentField: "",
  updateCurrentField: (currentFieldValue: string) => {},
};

const QueryBuilderContext =
  React.createContext<QueryBuilderContextData>(initialQueriesData);

export const QueryBuilderContextProvider: React.FC = (props) => {
  const [currentField, setCurrentField] = useState("");

  const updateCurrentField = (currentFieldValue: string) => {
    setCurrentField(currentFieldValue);
  };

  const queryBuilderData: QueryBuilderContextData = {
    filterList: {
      filters,
    },
    currentField,
    updateCurrentField,
  };

  return (
    <QueryBuilderContext.Provider value={queryBuilderData}>
      {props.children}
    </QueryBuilderContext.Provider>
  );
};

export default QueryBuilderContext;
