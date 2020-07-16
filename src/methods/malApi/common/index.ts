export * from "./work";

export interface Picture {
  large: string | null;
  medium: string;
}

export interface Paging<T> {
  data: T[];
  paging: {
    previous?: string;
    next?: string;
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
