export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  items: ResourceItem[];
}

export interface ResourceItem {
  name: string;
  description: string;
  url: string;
  icon?: string;
  tags?: string[];
  rating?: number;
  free?: boolean;
}

export type ResourceCategory =
  | "tools"
  | "learning"
  | "libraries"
  | "inspiration"
  | "assets"
  | "other";

export interface ResourceFilter {
  category?: ResourceCategory;
  tag?: string;
  free?: boolean;
}
