import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Club*/
export class Club {
  /** @ignore */
  private baseUrl: string;

  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/clubs/${id}`;
  }

  info(): Promise<Types.Club> {
    return jikanGet(this.baseUrl);
  }

  members(params?: { page?: number }): Promise<Types.ClubMember> {
    const url = urljoin(this.baseUrl, "members") + queryJoin({ ...params });
    return jikanGet(url);
  }

  staff(): Promise<Types.ClubStaff> {
    return jikanGet(urljoin(this.baseUrl, "staff"));
  }

  relations(): Promise<Types.ClubRelations> {
    return jikanGet(urljoin(this.baseUrl, "relations"));
  }
}

/** @category Club*/
export function club(id: number): Club {
  return new Club(id);
}

/** @category Club*/
export function clubSearch(params?: {
  page?: number;
  limit?: number;
  q?: string;
  type?: "public" | "private" | "secret";
  category?:
    | "anime"
    | "manga"
    | "actors_and_artists"
    | "characters"
    | "cities_and_neighborhoods"
    | "companies"
    | "conventions"
    | "games"
    | "japan"
    | "music"
    | "other"
    | "schools";
  order_by?:
    | "mal_id"
    | "title"
    | "members_count"
    | "pictures_count"
    | "created";
  sort?: "desc" | "asc";
  letter?: string;
}): Promise<Types.ClubsSearch> {
  const url = urljoin(jikanUrl, "clubs") + queryJoin({ ...params });
  return jikanGet(url);
}
