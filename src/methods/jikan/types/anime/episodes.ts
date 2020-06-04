/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/Episodes.php */
export interface Episodes {
  episodes_last_page: number;
  episodes: EpisodeListItem[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
export default Episodes;

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/EpisodeListItem.php */
export interface EpisodeListItem {
  episode_id: number;

  title: string;
  title_japanese: string | null;
  title_romanji: string | null;

  aired: Date | null;
  filler: boolean;
  recap: boolean;

  video_url: string;
  forum_url: string;
}
