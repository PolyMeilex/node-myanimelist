import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # Season
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/season" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * ### Get Season
 * Anime of the specified season
 * ```js
 * Jikan.season(2018, "winter");
 * ```
 * **Posible seasons**: ``summer`` ``spring`` ``fall`` ``winter ``
 */
export class Season {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/season`;
  }
  info(year: number, season: SeasonType) {
    return jikanGet(joinUrl(this.baseUrl, [String(year), String(season)]));
  }
}

export type SeasonType = "summer" | "spring" | "fall" | "winter";

export function season(year: number, season: SeasonType): Promise<any> {
  return new Season().info(year, season);
}
