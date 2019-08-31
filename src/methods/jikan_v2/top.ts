import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

class TopAnime {
  private parent: Top;
  constructor(parent: Top) {
    this.parent = parent;
  }
  private topGet(p: number, subType: string) {
    let params: string[] = [];
    if (p != null) params[0] = String(p);
    else params[0] = "1";
    params.push(subType);

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

class Top {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/top`;
  }
  private jikanGet(url: string) {
    console.log(url);
  }
  anime(): TopAnime {
    return new TopAnime(this);
  }
}

export default function(): Top {
  return new Top();
}
