import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # Top
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/top" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * To get top info you need to create top object and select type of entry, like so:
 * ```ts
 * let top = Mal.top().anime();
 * //                 .manga()
 * //                 .people()
 * //                 .characters()
 * ```
 * And then you can use top object multiple times to get desired information.
 *
 * ### Functions That You Can Use With All Types
 * ```ts
 * top.all(page?);
 * ```
 * ### Anime Specific Functions
 * ```ts
 * top.airing(page?);
 * top.upcoming(page?);
 * top.tv(page?);
 * top.movie(page?);
 * top.ova(page?);
 * top.special(page?);
 * ```
 * ### Manga Specific Functions
 * ```ts
 * top.manga(page?);
 * top.novels(page?);
 * top.oneshots(page?);
 * top.doujin(page?);
 * top.manhwa(page?);
 * top.manhua(page?);
 * ```
 * ### Manga & Anime Specific Functions
 * ```ts
 * top.byPopularity(page?);
 * top.favorite(page?);
 * ```
 * Each of those functions returns promise
 * ## Examples
 * ```ts
 * Mal.top().anime().all()
 * .then(res => res.data)
 * .then(topJson => {});
 * Mal.top().anime().movie()
 * .then(res => res.data)
 * .then(topJson => {});
 * ```
 */
export class Top {
  /** @ignore */
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/top`;
  }
  anime(): TopAnime {
    return new TopAnime(this.baseUrl);
  }
  manga(): TopManga {
    return new TopManga(this.baseUrl);
  }
  people(): TopSimple {
    return new TopSimple(this.baseUrl, "people");
  }
  characters(): TopSimple {
    return new TopSimple(this.baseUrl, "characters");
  }
}

// Class For "people" And "characters"
export class TopSimple {
  private baseUrl: string;
  private type: string;
  constructor(baseUrl: string, type: string) {
    this.baseUrl = baseUrl;
    this.type = type;
  }
  private topGet(p: number | undefined, subType: string) {
    let params: string[] = [this.type];
    if (p != undefined) params[1] = String(p);
    else params[1] = "1";
    params[2] = subType;

    const url = joinUrl(this.baseUrl, params);

    return jikanGet(url);
  }
  all(p?: number) {
    return this.topGet(p, "");
  }
}

export class TopAnime {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  private topGet(p: number | undefined, subType: string) {
    let params: string[] = ["anime"];
    if (p != undefined) params[1] = String(p);
    else params[1] = "1";
    params[2] = subType;

    const url = joinUrl(this.baseUrl, params);

    return jikanGet(url);
  }
  all(p?: number) {
    return this.topGet(p, "");
  }
  airing(p?: number) {
    return this.topGet(p, "airing");
  }
  upcoming(p?: number) {
    return this.topGet(p, "upcoming");
  }
  tv(p?: number) {
    return this.topGet(p, "tv");
  }
  movie(p?: number) {
    return this.topGet(p, "movie");
  }
  ova(p?: number) {
    return this.topGet(p, "ova");
  }
  special(p?: number) {
    return this.topGet(p, "special");
  }
  byPopularity(p?: number) {
    return this.topGet(p, "bypopularity");
  }
  favorite(p?: number) {
    return this.topGet(p, "favorite");
  }
}

export class TopManga {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  private topGet(p: number | undefined, subType: string) {
    let params: string[] = ["manga"];
    if (p != undefined) params[1] = String(p);
    else params[1] = "1";
    params[2] = subType;

    const url = joinUrl(this.baseUrl, params);

    return jikanGet(url);
  }
  all(p?: number) {
    return this.topGet(p, "");
  }
  manga(p?: number) {
    return this.topGet(p, "manga");
  }
  novels(p?: number) {
    return this.topGet(p, "novels");
  }
  oneshots(p?: number) {
    return this.topGet(p, "oneshots");
  }
  doujin(p?: number) {
    return this.topGet(p, "doujin");
  }
  manhwa(p?: number) {
    return this.topGet(p, "manhwa");
  }
  manhua(p?: number) {
    return this.topGet(p, "manhua");
  }
  byPopularity(p?: number) {
    return this.topGet(p, "bypopularity");
  }
  favorite(p?: number) {
    return this.topGet(p, "favorite");
  }
}

export function top(): Top {
  return new Top();
}
