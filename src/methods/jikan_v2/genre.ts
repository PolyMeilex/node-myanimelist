import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import { AnimeGenre, MangaGenre } from "./genreTypes";

class Genre {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/genre`;
  }
  private jikanGet(url: string) {
    console.log(url);
  }
  anime(genre: AnimeGenre, p?: number) {
    let params: string[] = ["anime", String(genre)];
    if (p != null) params[2] = String(p);
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
  manga(genre: MangaGenre, p?: number) {
    let params: string[] = ["manga", String(genre)];
    if (p != null) params[2] = String(p);
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function(): Genre {
  return new Genre();
}
