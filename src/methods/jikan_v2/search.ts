import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import { AnimeGenre, MangaGenre } from "./genreTypes";

class Search {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/search`;
  }
  private jikanGet(url: string) {
    console.log(url);
  }
  search(type: string, params: string) {
    let qparams = Object.keys(params)
      .filter(k => params[k] != null)
      .map(k => `${k}=${encodeURIComponent(params[k])}`)
      .join("&");
    return this.jikanGet(joinUrl(this.baseUrl, [type, "?" + qparams]));
  }
  anime(params: any) {
    return this.search("anime", params);
  }
  manga(params: any) {
    return this.search("manga", params);
  }
  person(params: any) {
    return this.search("person", params);
  }
  character(params: any) {
    return this.search("character", params);
  }
}

export default function(): Search {
  return new Search();
}
