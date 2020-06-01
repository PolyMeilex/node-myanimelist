import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # SeasonLater
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/season" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * ### Get Season Later
 * Anime that have been announced for the upcoming seasons
 * ```js
 * Mal.seasonLater();
 * ```
 */
export class SeasonLater {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/season/later`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
}

export function seasonLater(): Promise<any> {
  return new SeasonLater().info();
}
