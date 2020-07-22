import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";

import { ClubInfo, Members } from "./types/club";

export * from "./types/club";

/**
 * # Club
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/club" target="_blank">https://jikan.docs.apiary.io</a>
 * To get club you need to create club object, like so:
 * ```ts
 * let club = Jikan.club(id);
 * ```
 * And then you can use club object multiple times to get desired information.
 * ```ts
 * club.info();
 * club.members(page?);
 * ```
 */
export class Club {
  /** @ignore */
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/club/${id}`;
  }
  info(): Req<ClubInfo> {
    return jikanGet(this.baseUrl);
  }
  members(p?: number): Req<Members> {
    let params: string[] = ["members"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export function club(id: number): Club {
  return new Club(id);
}
