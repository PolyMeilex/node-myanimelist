import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";
import { CharacterInfo, Pictures } from "./types/character";

/**
 * # Character
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/character" target="_blank">https://jikan.docs.apiary.io</a>
 * To get character you need to create character object, like that:
 * ```ts
 * let character = Mal.character(id);
 * ```
 * Now you can use character object multiple times to get desired information.
 * ```ts
 * character.info();
 * character.pictures();
 * ```
 * Each of those functions returns promise
 * ## Example
 * ```ts
 * character.info()
 *          .then(res => res.data)
 *          .then(characterJson => characterJson.name);
 * ```
 */
export class Character {
  /** @ignore */
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/character/${id}`;
  }
  info(): Req<CharacterInfo> {
    return jikanGet(this.baseUrl);
  }
  pictures(): Req<Pictures> {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
}

export function character(id: number): Character {
  return new Character(id);
}
