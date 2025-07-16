export interface Resource {
  id: string;
  title: string;
  description: string;
  items: ResourceItem[];
}

export interface ResourceItem {
  name: string;
  description: string;
  url: string;
  icon?: string;
  tags?: string[];
  free?: boolean;
}

export type ResourceCategory =
  | "utilities"
  | "interface-inspo"
  | "icons-graphics"
  | "performance-productivity"
  | "placeholders-mock";

export interface ResourceFilter {
  category?: ResourceCategory;
  tag?: string;
  free?: boolean;
}
