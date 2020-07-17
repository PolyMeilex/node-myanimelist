import { Common } from "../";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Manga/Manga.php */
export interface MangaInfo {
  mal_id: number;
  url: string;

  title: string;
  title_english: string | null;
  title_synonyms: string[];
  title_japanese: string | null;

  status: string;
  image_url: string;

  type: string | null;
  volumes: number | null;
  chapters: number | null;

  publishing: boolean;
  published: Common.DateRange;

  rank: number | null;
  score: number | null;
  scored_by: number | null;

  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;

  background: string | null;

  related: Common.MalUrl[];
  genres: Common.MalUrl[];
  authors: Common.MalUrl[];
  serializations: Common.MalUrl[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
