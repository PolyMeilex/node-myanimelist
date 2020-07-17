import { Common } from "../";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/Anime.php */
export interface AnimeInfo {
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
  aired: Common.DateRange;

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

  producers: Common.MalUrl[];
  licensors: Common.MalUrl[];
  studios: Common.MalUrl[];

  genres: Common.MalUrl[];
  opening_themes: string[];
  ending_themes: string[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

export interface Related {
  Adaptation: Common.MalUrl[];
  "Side story": Common.MalUrl[];
  Summary: Common.MalUrl[];
}
