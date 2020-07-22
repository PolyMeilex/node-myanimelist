import { Forum } from "../";

/** src: ? */
export interface Forum {
  topics: Forum.ForumTopic[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
