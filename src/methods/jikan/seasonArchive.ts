import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # SeasonArchive
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/season" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * ### Get Season Archive
 * All the years & their respective seasons that can be parsed from MyAnimeList
 * ```js
 * Jikan.seasonArchive();
 * ```
 */
export class SeasonArchive {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/season/archive`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
}

export function seasonArchive(): Promise<any> {
  return new SeasonArchive().info();
}
