import { Common } from "../";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Magazine/Magazine.php */
export interface MagazineInfo {
  manga: MagazineManga[];
  meta: Common.MalUrl;

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Magazine/MagazineManga.php */
interface MagazineManga extends Common.MangaCard {}
