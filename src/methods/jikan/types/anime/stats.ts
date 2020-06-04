/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeStats.php */
export interface AnimeStats {
  watching: number;
  completed: number;
  on_hold: number;

  dropped: number;
  plan_to_watch: number;

  total: number;

  scores: { [key: string]: AnimeStatsScore };

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
export default AnimeStats;

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeStatsScore.php */
export interface AnimeStatsScore {
  votes: number;
  percentage: number;
}
