import { WorkBase } from "./work";

export * from "./work";

export interface Picture {
  large: string | null;
  medium: string;
}

export interface Paging<T> {
  data: T[];
  paging: {
    previous?: string | null;
    next?: string | null;
  };
}

export interface RankingItem {
  ranking: {
    rank: number;
    previous_rank: number | null;
  };
}

export interface PersonBase {
  id: number;
  first_name: string;
  last_name: string;
}

export interface PersonRoleEdge {
  node: PersonBase;
  role: string;
}

export interface RelatedEdge<T> {
  node: WorkBase & T;
  /** The type of the relationship between this work and related work. */
  relation_type:
    | "sequel"
    | "prequel"
    | "alternative_setting"
    | "alternative_version"
    | "side_story"
    | "parent_story"
    | "summary"
    | "full_story";
  /** The format of relation_type for human like "Alternative version". */
  relation_type_formatted: string;
}

export interface RecommendationEdge<T> {
  node: WorkBase & T;
  num_recommendations: number;
}
