import MalUrl from "../common/malUrl";
import DateRange from "../common/dateRange";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/Anime.php */
export default interface AnimeInfo {
  mal_id: number;
  url: string;
  image_url: string;

  trailer_url: string | null;

  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: any[];

  type: string | null;

  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  aired: DateRange;

  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;

  rank: number | null;
  popularity: number | null;
  members: number | null;

  favorites: number | null;
  synopsis: string | null;
  background: string | null;

  premiered: string | null;
  broadcast: string | null;
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
