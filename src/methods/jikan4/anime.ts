import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export class Anime {
  /** @ignore */
  private baseUrl: string;

  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/anime/${id}`;
  }

  info(): Promise<{ data: Types.Anime }> {
    return jikanGet(this.baseUrl);
  }

  characters(): Promise<Types.AnimeCharacters> {
    return jikanGet(urljoin(this.baseUrl, "characters"));
  }

  staff(): Promise<Types.AnimeStaff> {
    return jikanGet(urljoin(this.baseUrl, "staff"));
  }

  episodes(params?: { page?: number }): Promise<Types.AnimeEpisodes> {
    const url = urljoin(this.baseUrl, "episodes") + queryJoin({ ...params });
    return jikanGet(url);
  }

  episode(id: number): Promise<Types.AnimeEpisode> {
    return jikanGet(urljoin(this.baseUrl, "episodes", id.toString()));
  }

  news(params?: { page?: number }): Promise<Types.AnimeNews> {
    const url = urljoin(this.baseUrl, "news") + queryJoin({ ...params });
    return jikanGet(url);
  }

  forum(params?: {
    topic?: "all" | "episode" | "other";
  }): Promise<Types.Forum> {
    const url = urljoin(this.baseUrl, "forum") + queryJoin({ ...params });
    return jikanGet(url);
  }

  videos(): Promise<Types.AnimeVideos> {
    return jikanGet(urljoin(this.baseUrl, "videos"));
  }

  pictures(): Promise<Types.Pictures> {
    return jikanGet(urljoin(this.baseUrl, "pictures"));
  }

  statistics(): Promise<Types.AnimeStatistics> {
    return jikanGet(urljoin(this.baseUrl, "statistics"));
  }

  moreInfo(): Promise<Types.Moreinfo> {
    return jikanGet(urljoin(this.baseUrl, "moreinfo"));
  }

  recommendations(): Promise<Types.EntryRecommendations> {
    return jikanGet(urljoin(this.baseUrl, "recommendations"));
  }

  userUpdates(params?: { page?: number }): Promise<Types.AnimeUserupdates> {
    const url = urljoin(this.baseUrl, "userupdates") + queryJoin({ ...params });
    return jikanGet(url);
  }

  reviews(params?: { page?: number }): Promise<Types.AnimeReviews> {
    const url = urljoin(this.baseUrl, "reviews") + queryJoin({ ...params });
    return jikanGet(url);
  }

  relations(): Promise<Types.AnimeRelations> {
    return jikanGet(urljoin(this.baseUrl, "relations"));
  }

  themes(): Promise<Types.AnimeThemes> {
    return jikanGet(urljoin(this.baseUrl, "themes"));
  }

  external(): Promise<Types.ExternalLinks> {
    return jikanGet(urljoin(this.baseUrl, "external"));
  }
}

export function anime(id: number): Anime {
  return new Anime(id);
}

export function animeSearch(params?: {
  page?: number;
  limit?: number;
  q?: string;
  type?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "airing" | "complete" | "upcoming";
  ranking?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  order_by?:
    | "mal_id"
    | "title"
    | "type"
    | "rating"
    | "start_date"
    | "end_date"
    | "episodes"
    | "score"
    | "scored_by"
    | "rank"
    | "popularity"
    | "members"
    | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
  producer?: string;
}): Promise<Types.AnimeSearch> {
  const url = urljoin(jikanUrl, "anime") + queryJoin({ ...params });
  return jikanGet(url);
}
