import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

import AnimeGenreId from "./types/animeGenre";
import MangaGenreId from "./types/mangaGenre";

import AnimeType from "./types/animeType";
import MangaType from "./types/mangaType";

import AnimeStatus from "./types/animeStatus";
import MangaStatus from "./types/mangaStatus";

import AnimeOrderBy from "./types/animeOrderBy";
import MangaOrderBy from "./types/mangaOrderBy";

import Sort from "./types/sort";
import Rating from "./types/rating";

/**
 * # AdvancedSearchParameters
 *
 * {@link AnimeGenreId}
 *
 * {@link MangaGenreId}
 */
export interface AdvancedSearchParameters {
  q?: string;
  page?: number;
  type?: AnimeType | MangaType;
  status?: AnimeStatus | MangaStatus;
  rated?: Rating;
  genre?: AnimeGenreId | MangaGenreId;
  score?: number;
  start_date?: string;
  end_date?: string;
  genre_exclude?: 0 | 1;
  limit?: number;
  order_by?: AnimeOrderBy | MangaOrderBy;
  sort?: Sort;
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
 * Mal.search();
 * ```
 * And then you can choose type of search
 * ```ts
 * Mal.search().anime({ q: "Fate", page: 2 });
 * Mal.search().manga({ q: "Fate" });
 * Mal.search().person({ q: "Fate" });
 * Mal.search().character({ q: "Fate" });
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
