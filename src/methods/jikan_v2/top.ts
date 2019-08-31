import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class Top {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/top`;
  }
  private jikanGet(url: string) {
    return axios.get(url);
  }
  anime(): TopAnime {
    return new TopAnime(this);
  }
  manga(): TopManga {
    return new TopManga(this);
  }
  people(): TopSimple {
    return new TopSimple(this, "people");
  }
  characters(): TopSimple {
    return new TopSimple(this, "characters");
  }
}

// Class For "people" And "characters"
class TopSimple {
  private parent: Top;
  private type: string;
  constructor(parent: Top, type: string) {
    this.parent = parent;
    this.type = type;
  }
  private topGet(p: number, subType: string) {
    let params: string[] = [this.type];
    if (p != null) params[1] = String(p);
    else params[1] = "1";
    params[2] = subType;

    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, params);
    // @ts-ignore
    return this.parent.jikanGet(url);
  }
  all(p?: number) {
    return this.topGet(p, "");
  }
}

class TopAnime {
  private parent: Top;
  constructor(parent: Top) {
    this.parent = parent;
  }
  private topGet(p: number, subType: string) {
    let params: string[] = ["anime"];
    if (p != null) params[1] = String(p);
    else params[1] = "1";
    params[2] = subType;

    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, params);
    // @ts-ignore
    return this.parent.jikanGet(url);
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
  private parent: Top;
  constructor(parent: Top) {
    this.parent = parent;
  }
  private topGet(p: number, subType: string) {
    let params: string[] = ["manga"];
    if (p != null) params[1] = String(p);
    else params[1] = "1";
    params[2] = subType;

    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, params);
    // @ts-ignore
    return this.parent.jikanGet(url);
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

export default function(): Top {
  return new Top();
}
