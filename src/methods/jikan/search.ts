import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

import { Anime, Manga } from "./types";

/**
 * # AdvancedSearchParameters
 *
 */
export interface AdvancedSearchParameters {
  q?: string;
  page?: number;
  type?: Anime.Type | Manga.Type;
  status?: Anime.Status | Manga.Status;
  rated?: Anime.Rating | Manga.Rating;
  genre?: Anime.GenreId | Manga.GenreId;
  score?: number;
  start_date?: string;
  end_date?: string;
  genre_exclude?: 0 | 1;
  limit?: number;
  order_by?: Anime.OrderBy | Manga.OrderBy;
  sort?: Anime.Sort | Manga.Sort;
  producer?: number;
  magazine?: number;
  letter?: string;
}

type ParamsKeys = keyof AdvancedSearchParameters;

/**
 * # Search
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/search" target="_blank">https://jikan.docs.apiary.io</a>
 * To search you need to create search object, like that:
 * ```ts
 * Jikan.search();
 * ```
 * And then you can choose type of search
 * ```ts
 * Jikan.search().anime({ q: "Fate", page: 2 });
 * Jikan.search().manga({ q: "Fate" });
 * Jikan.search().person({ q: "Fate" });
 * Jikan.search().character({ q: "Fate" });
 *
 * Jikan.search().anime({
 *    q: "fate",
 *    page: 2,
 *    genre: Jikan.Anime.GenreId.action,
 * });
 * ```
 *
 * {@link AdvancedSearchParameters}
 */
export class Search {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/search`;
  }
  private search(type: string, params: AdvancedSearchParameters) {
    let qparams = Object.keys(params) as ParamsKeys[];

    let out = qparams
      .map((key) => {
        return {
          key,
          param: params[key],
        };
      })
      .filter((p) => p.param != null)
      .map((p) => `${p.key}=${encodeURIComponent(p.param as any)}`)
      .join("&");

    return jikanGet(joinUrl(this.baseUrl, [type, "?" + out]));
  }
  anime(params: AdvancedSearchParameters) {
    return this.search("anime", params);
  }
  manga(params: AdvancedSearchParameters) {
    return this.search("manga", params);
  }
  person(params: AdvancedSearchParameters) {
    return this.search("person", params);
  }
  character(params: AdvancedSearchParameters) {
    return this.search("character", params);
  }
}

export function search(): Search {
  return new Search();
}
