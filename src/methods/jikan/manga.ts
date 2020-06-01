import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # Manga
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/manga" target="_blank">https://jikan.docs.apiary.io</a>
 * To get manga you need to create manga object, like so:
 * ```ts
 * let manga = Mal.manga(id);
 * ```
 * Now you can use manga object multiple times to get desired information.
 * ```ts
 * manga.info();
 * manga.characters();
 * manga.news();
 * manga.pictures();
 * manga.stats();
 * manga.forum();
 * manga.moreInfo();
 * manga.reviews(page?);
 * manga.recommendations();
 * manga.userUpdates(page?);
 * ```
 * Each of those functions returns promise
 * ## Example
 * ```ts
 * manga.info()
 *      .then(res => res.data)
 *      .then(mangaJson => mangaJson.title);
 * ```
 */
export class Manga {
  /** @ignore */
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/manga/${id}`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
  characters() {
    return jikanGet(joinUrl(this.baseUrl, ["characters"]));
  }
  news() {
    return jikanGet(joinUrl(this.baseUrl, ["news"]));
  }
  pictures() {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
  stats() {
    return jikanGet(joinUrl(this.baseUrl, ["stats"]));
  }
  forum() {
    return jikanGet(joinUrl(this.baseUrl, ["forum"]));
  }
  moreInfo() {
    return jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
  }
  reviews(p?: number) {
    let params: string[] = ["reviews"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  recommendations() {
    return jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
  }
  userUpdates(p?: number) {
    let params: string[] = ["userupdates"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export function manga(id: number): Manga {
  return new Manga(id);
}
