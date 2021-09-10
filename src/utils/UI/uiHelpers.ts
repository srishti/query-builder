import { FilterType } from "../../components/QueryBuilder/QueryBuilderModel";

export const getAllConditionsForFilter = (filterType: FilterType): string[] => {
  switch (filterType) {
    case FilterType.TextFilter:
      return ["Like", "Not Like", "Is Empty", "Is", "Is Not"];
    case FilterType.NumberFilter:
      return ["Equals", "Does not equal"];
    case FilterType.DateFilter:
      return ["Is", "Is Not"];
    default:
      return [];
  }
};
