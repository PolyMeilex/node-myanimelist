import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

import AnimeGenre from "./types/animeGenre";
import MangaGenre from "./types/mangaGenre";

import AnimeType from "./types/animeType";
import MangaType from "./types/mangaType";

import AnimeStatus from "./types/animeStatus";
import MangaStatus from "./types/mangaStatus";

import AnimeOrderBy from "./types/animeOrderBy";
import MangaOrderBy from "./types/mangaOrderBy";

import Sort from "./types/sort";
import Rating from "./types/rating";

interface AdvancedSearchParameters {
  q?: string;
  page?: number;
  type?: AnimeType | MangaType;
  status?: AnimeStatus | MangaStatus;
  rated?: Rating;
  genre?: AnimeGenre | MangaGenre;
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

class Search {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/search`;
  }
  private search(type: string, params: AdvancedSearchParameters) {
    let qparams = Object.keys(params)
      .filter((k) => params[k] != null)
      .map((k) => `${k}=${encodeURIComponent(params[k])}`)
      .join("&");
    return jikanGet(joinUrl(this.baseUrl, [type, "?" + qparams]));
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

export default function (): Search {
  return new Search();
}
