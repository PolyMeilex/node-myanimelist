import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";

import { Anime, Manga } from "./types";
// export { Anime, Manga } from "./types";

/**
 * # Genre
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/genre" target="_blank">https://jikan.docs.apiary.io</a>
 * Anime/Manga items of the genre.
 * To get genre info you need to create genre object and select type of items, like so:
 * ```ts
 * Jikan.genre().anime(Jikan.Genre.AnimeGenreId.action,paga?),
 *            .manga(Jikan.Genre.MangaGenreId.action,paga?),
 * ```
 * Each of those functions returns promise
 *
 * {@link AnimeGenreId}
 *
 * {@link MangaGenreId}
 */
export class Genre {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/genre`;
  }
  anime(genre: Anime.GenreId, p?: number): Req<Anime.Genre> {
    let params: string[] = ["anime", String(genre)];
    if (p != null) params[2] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  manga(genre: Manga.GenreId, p?: number): Req<Manga.Genre> {
    let params: string[] = ["manga", String(genre)];
    if (p != null) params[2] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export function genre(): Genre {
  return new Genre();
}
