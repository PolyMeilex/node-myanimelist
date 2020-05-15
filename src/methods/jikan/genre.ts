import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

import AnimeGenre from "./types/animeGenre.js";
import MangaGenre from "./types/mangaGenre.js";

class Genre {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/genre`;
  }
  anime(genre: AnimeGenre, p?: number) {
    let params: string[] = ["anime", String(genre)];
    if (p != null) params[2] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  manga(genre: MangaGenre, p?: number) {
    let params: string[] = ["manga", String(genre)];
    if (p != null) params[2] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (): Genre {
  return new Genre();
}
