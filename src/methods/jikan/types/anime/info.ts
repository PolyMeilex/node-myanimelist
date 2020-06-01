import MalUrl from "../common/malUrl";
import DateRange from "../common/dateRange";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/Anime.php */
export default interface AnimeInfo {
  mal_id: number;
  url: string;
  image_url: string;

  trailer_url?: string;

  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: any[];

  type?: string;

  source?: string;
  episodes?: number;
  status?: string;
  airing: boolean;
  aired: DateRange;

  duration?: string;
  rating?: string;
  score?: number;
  scored_by?: number;

  rank?: number;
  popularity?: number;
  members?: number;

  favorites?: number;
  synopsis?: string;
  background?: string;

  premiered?: string;
  broadcast?: string;
  related: Related;

  producers: MalUrl[];
  licensors: MalUrl[];
  studios: MalUrl[];

  genres: MalUrl[];
  opening_themes: string[];
  ending_themes: string[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

interface Related {
  Adaptation: MalUrl[];
  "Side story": MalUrl[];
  Summary: MalUrl[];
}
