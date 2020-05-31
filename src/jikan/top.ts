import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class Top {
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
class TopSimple {
  private baseUrl: string;
  private type: string;
  constructor(baseUrl: string, type: string) {
    this.baseUrl = baseUrl;
    this.type = type;
  }
  private topGet(p: number, subType: string) {
    let params: string[] = [this.type];
    if (p != null) params[1] = String(p);
    else params[1] = "1";
    params[2] = subType;

    const url = joinUrl(this.baseUrl, params);

    return jikanGet(url);
  }
  all(p?: number) {
    return this.topGet(p, "");
  }
}

class TopAnime {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  private topGet(p: number, subType: string) {
    let params: string[] = ["anime"];
    if (p != null) params[1] = String(p);
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

class TopManga {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  private topGet(p: number, subType: string) {
    let params: string[] = ["manga"];
    if (p != null) params[1] = String(p);
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

export default function (): Top {
  return new Top();
}
