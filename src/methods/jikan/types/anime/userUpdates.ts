/** src: ? */
export default interface AnimeUserUpdates {
  users: AnimeRecentlyUpdatedByUser[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeRecentlyUpdatedByUser.php */
interface AnimeRecentlyUpdatedByUser {
  username: string;
  url: string;
  image_url: string;
  score?: number;
  status: Status;
  episodes_seen?: number;
  episodes_total?: number;
  date: Date;
}

enum Status {
  Completed = "Completed",
  Dropped = "Dropped",
  OnHold = "On-Hold",
  PlanToWatch = "Plan to Watch",
  Watching = "Watching",
}
