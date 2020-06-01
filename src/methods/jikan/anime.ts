import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";
import {
  AnimeInfo,
  AnimeCharactersStaff,
  Episodes,
  News,
  Pictures,
  AnimeVideos,
  AnimeStats,
  Forum,
  MoreInfo,
  AnimeReviews,
  Recommendations,
  AnimeUserUpdates,
} from "./types/anime/";

class Anime {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/anime/${id}`;
  }
  info(): Req<AnimeInfo> {
    return jikanGet(this.baseUrl);
  }
  charactersStaff(): Req<AnimeCharactersStaff> {
    return jikanGet(joinUrl(this.baseUrl, ["characters_staff"]));
  }
  episodes(p?: number): Req<Episodes> {
    let params: string[] = ["episodes"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  news(): Req<News> {
    return jikanGet(joinUrl(this.baseUrl, ["news"]));
  }
  pictures(): Req<Pictures> {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
  videos(): Req<AnimeVideos> {
    return jikanGet(joinUrl(this.baseUrl, ["videos"]));
  }
  stats(): Req<AnimeStats> {
    return jikanGet(joinUrl(this.baseUrl, ["stats"]));
  }
  forum(): Req<Forum> {
    return jikanGet(joinUrl(this.baseUrl, ["forum"]));
  }
  moreInfo(): Req<MoreInfo> {
    return jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
  }
  reviews(p?: number): Req<AnimeReviews> {
    let params: string[] = ["reviews"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  recommendations(): Req<Recommendations> {
    return jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
  }
  userUpdates(p?: number): Req<AnimeUserUpdates> {
    let params: string[] = ["userupdates"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (id: number): Anime {
  return new Anime(id);
}
