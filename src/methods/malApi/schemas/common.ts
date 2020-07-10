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
