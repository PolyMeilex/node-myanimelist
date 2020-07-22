/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeStats.php */
export interface Stats {
  watching: number;
  completed: number;
  on_hold: number;

  dropped: number;
  plan_to_watch: number;

  total: number;

  scores: { [key: string]: StatsScore };

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeStatsScore.php */
export interface StatsScore {
  votes: number;
  percentage: number;
}
