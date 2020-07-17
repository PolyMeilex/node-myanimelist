import { Common } from "../";

/* src: ? */
export interface Recommendations {
  recommendations: Common.Recommendation[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
