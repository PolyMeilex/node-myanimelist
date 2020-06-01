import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";

import AnimeGenreId from "./types/animeGenre";
import MangaGenreId from "./types/mangaGenre";

import { AnimeGenre, MangaGenre } from "./types/genre";

export class Genre {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/genre`;
  }
  anime(genre: AnimeGenreId, p?: number): Req<AnimeGenre> {
    let params: string[] = ["anime", String(genre)];
    if (p != null) params[2] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  manga(genre: MangaGenreId, p?: number): Req<MangaGenre> {
    let params: string[] = ["manga", String(genre)];
    if (p != null) params[2] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (): Genre {
  return new Genre();
}
