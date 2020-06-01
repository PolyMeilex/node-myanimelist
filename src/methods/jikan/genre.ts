import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";

import AnimeGenreId from "./types/animeGenre";
import MangaGenreId from "./types/mangaGenre";

import { AnimeGenre, MangaGenre } from "./types/genre";

/**
 * # Genre
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/genre" target="_blank">https://jikan.docs.apiary.io</a>
 * Anime/Manga items of the genre.
 * To get genre info you need to create genre object and select type of items, like so:
 * ```ts
 * Mal.genre().anime(Mal.types.AnimeGenreId.Action, page?);
 * //         .manga(Mal.types.MangaGenreId.Action, page?);
 * ```
 * Each of those functions returns promise
 */
export class Genre {
  /** @ignore */
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

export function genre(): Genre {
  return new Genre();
}
