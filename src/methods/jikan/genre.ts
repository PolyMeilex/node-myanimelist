import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

import AnimeGenre from "./types/animeGenre";
import MangaGenre from "./types/mangaGenre";

export class Genre {
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
