import MalUrl from "../common/malUrl";
import { MangaCard } from "../common/mangaCard";
import { AnimeCard } from "../common/animeCard";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Genre/AnimeGenre.php */
export interface AnimeGenre {
  mal_url: MalUrl;
  item_count: number;
  anime: AnimeCard[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Genre/MangaGenre.php */
export interface MangaGenre {
  mal_url: MalUrl;
  item_count: number;
  manga: MangaCard[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
