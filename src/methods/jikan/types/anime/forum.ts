import ForumTopic from "../forum/forumTopic";

/** src: ? */
export default interface Forum {
  topics: ForumTopic[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
