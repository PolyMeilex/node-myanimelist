/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeMoreInfo.php */
export interface AnimeMoreInfo {
  moreinfo: string;

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
export default AnimeMoreInfo;
