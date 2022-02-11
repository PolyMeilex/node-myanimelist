import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export class Manga {
  /** @ignore */
  private baseUrl: string;

  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/manga/${id}`;
  }

  info(): Promise<Types.Manga> {
    return jikanGet(this.baseUrl);
  }

  characters(): Promise<Types.MangaCharacters> {
    return jikanGet(urljoin(this.baseUrl, "characters"));
  }

  news(params?: { page?: number }): Promise<Types.MangaNews> {
    const url = urljoin(this.baseUrl, "news") + queryJoin({ ...params });
    return jikanGet(url);
  }

  forum(params?: {
    topic?: "all" | "episode" | "other";
  }): Promise<Types.Forum> {
    const url = urljoin(this.baseUrl, "forum") + queryJoin({ ...params });
    return jikanGet(url);
  }

  pictures(): Promise<Types.Pictures> {
    return jikanGet(urljoin(this.baseUrl, "pictures"));
  }

  statistics(): Promise<Types.MangaStatistics> {
    return jikanGet(urljoin(this.baseUrl, "statistics"));
  }

  moreInfo(): Promise<Types.Moreinfo> {
    return jikanGet(urljoin(this.baseUrl, "moreinfo"));
  }

  recommendations(): Promise<Types.EntryRecommendations> {
    return jikanGet(urljoin(this.baseUrl, "recommendations"));
  }

  userUpdates(params?: { page?: number }): Promise<Types.MangaUserupdates> {
    const url = urljoin(this.baseUrl, "userupdates") + queryJoin({ ...params });
    return jikanGet(url);
  }

  reviews(params?: { page?: number }): Promise<Types.MangaReview> {
    const url = urljoin(this.baseUrl, "reviews") + queryJoin({ ...params });
    return jikanGet(url);
  }

  relations(): Promise<Types.ManagaRelations> {
    return jikanGet(urljoin(this.baseUrl, "relations"));
  }
}

export function manga(id: number): Manga {
  return new Manga(id);
}

export function mangaSearch(params?: {
  page?: number;
  limit?: number;
  q?: string;
  type?:
    | "manga"
    | "novel"
    | "lightnovel"
    | "oneshot"
    | "doujin"
    | "manhwa"
    | "manhua";
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "publishing" | "complete" | "hiatus" | "discontinued" | "upcoming";
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  order_by?:
    | "mal_id"
    | "title"
    | "start_date"
    | "end_date"
    | "chapters"
    | "volumes"
    | "score"
    | "scored_by"
    | "rank"
    | "popularity"
    | "members"
    | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
  magazine?: string;
}): Promise<Types.MangaSearch> {
  const url = urljoin(jikanUrl, "manga") + queryJoin({ ...params });
  return jikanGet(url);
}
