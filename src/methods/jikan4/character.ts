import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Character*/
export class Character {
  /** @ignore */
  private baseUrl: string;

  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/characters/${id}`;
  }

  info(): Promise<Types.Character> {
    return jikanGet(this.baseUrl);
  }

  anime(): Promise<Types.CharacterAnime> {
    return jikanGet(urljoin(this.baseUrl, "anime"));
  }

  manga(): Promise<Types.CharacterManga> {
    return jikanGet(urljoin(this.baseUrl, "manga"));
  }

  voiceActors(): Promise<Types.CharacterVoiceActors> {
    return jikanGet(urljoin(this.baseUrl, "voices"));
  }

  pictures(): Promise<Types.CharacterPictures> {
    return jikanGet(urljoin(this.baseUrl, "pictures"));
  }
}

/** @category Character*/
export function character(id: number): Character {
  return new Character(id);
}

/** @category Character*/
export function characterSearch(params?: {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: "mal_id" | "name" | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
}): Promise<Types.CharactersSearch> {
  const url = urljoin(jikanUrl, "characters") + queryJoin({ ...params });
  return jikanGet(url);
}
