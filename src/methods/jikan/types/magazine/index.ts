import MalUrl from "../common/malUrl";
import { MangaCard } from "../common/mangaCard";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Magazine/Magazine.php */
export interface MagazineInfo {
  manga: MagazineManga[];
  meta: MalUrl;

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Magazine/MagazineManga.php */
interface MagazineManga extends MangaCard {}

