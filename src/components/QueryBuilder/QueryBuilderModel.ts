export interface FilterList {
  filters: FilterData[];
}

export interface FilterData {
  type: string;
  category: string;
}

export enum FilterType {
  TextFilter = "TextFilter",
  NumberFilter = "NumberFilter",
  DateFilter = "DateFilter",
}

export interface TextFilter extends FilterData {
  field: string;
  criteria: string[];
}

export interface NumberFilter extends FilterData {
  field: string;
  criteria: number[];
}

export interface DateFilter extends FilterData {
  field: string;
  criteria: string[];
}

// export interface RuleGroup {
//   children: (RuleGroup | Rule)[];
//   conjunction: "AND" | "OR";
//   not: boolean;
//   type: "rule_group";
// }
