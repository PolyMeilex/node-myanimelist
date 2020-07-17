import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";

import {
  AnimeInfo,
  CharactersAndStaff,
  Episodes,
  Videos,
  Stats,
  Forum,
  Reviews,
  MoreInfo,
  UserUpdates,
  Recommendations,
  Pictures,
  NewsInfo,
} from "./types/anime";

export * from "./types/anime";

/**
 * # Anime
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/anime" target="_blank">https://jikan.docs.apiary.io</a>
 * To get anime you need to create anime object, like so:
 * ```ts
 * let anime = Jikan.anime(id);
 * ```
 * And then you can use anime object multiple times to get desired information.
 * ```typescript
 * anime.info();
 * anime.charactersStaff();
 * anime.episodes(page?);
 * anime.news();
 * anime.pictures();
 * anime.videos();
 * anime.stats();
 * anime.forum();
 * anime.moreInfo();
 * anime.reviews(page?);
 * anime.recommendations();
 * anime.userUpdates(page?);
 * ```
 * Each of those functions returns promise
 * ## Example
 * ```ts
 * anime.info()
 *      .then(res => res.data)
 *      .then(animeJson => animeJson.title);
 * ```
 */
export class Anime {
  /** @ignore */
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/anime/${id}`;
  }
  info(): Req<AnimeInfo> {
    return jikanGet(this.baseUrl);
  }
  charactersStaff(): Req<CharactersAndStaff> {
    return jikanGet(joinUrl(this.baseUrl, ["characters_staff"]));
  }
  episodes(p?: number): Req<Episodes> {
    let params: string[] = ["episodes"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  news(): Req<NewsInfo> {
    return jikanGet(joinUrl(this.baseUrl, ["news"]));
  }
  pictures(): Req<Pictures> {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
  videos(): Req<Videos> {
    return jikanGet(joinUrl(this.baseUrl, ["videos"]));
  }
  stats(): Req<Stats> {
    return jikanGet(joinUrl(this.baseUrl, ["stats"]));
  }
  forum(): Req<Forum> {
    return jikanGet(joinUrl(this.baseUrl, ["forum"]));
  }
  moreInfo(): Req<MoreInfo> {
    return jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
  }
  reviews(p?: number): Req<Reviews> {
    let params: string[] = ["reviews"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  recommendations(): Req<Recommendations> {
    return jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
  }
  userUpdates(p?: number): Req<UserUpdates> {
    let params: string[] = ["userupdates"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export function anime(id: number): Anime {
  return new Anime(id);
}
