import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Person*/
export class Person {
  /** @ignore */
  private baseUrl: string;

  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/people/${id}`;
  }

  info(): Promise<{ data: Types.Person }> {
    return jikanGet(this.baseUrl);
  }

  anime(): Promise<Types.PersonAnime> {
    return jikanGet(urljoin(this.baseUrl, "anime"));
  }

  voices(): Promise<Types.PersonVoiceActingRoles> {
    return jikanGet(urljoin(this.baseUrl, "voices"));
  }

  manga(): Promise<Types.PersonManga> {
    return jikanGet(urljoin(this.baseUrl, "manga"));
  }

  pictures(): Promise<Types.PersonPictures> {
    return jikanGet(urljoin(this.baseUrl, "pictures"));
  }
}

/** @category Person*/
export function person(id: number): Person {
  return new Person(id);
}

/** @category Person*/
export function personSearch(params?: {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: "mal_id" | "name" | "birthday" | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
}): Promise<Types.PeopleSearch> {
  const url = urljoin(jikanUrl, "people") + queryJoin({ ...params });
  return jikanGet(url);
}
