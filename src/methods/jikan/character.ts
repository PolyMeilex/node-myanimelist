import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";
import { CharacterInfo, Pictures } from "./types/character";

export class Character {
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

export default function (id: number): Character {
  return new Character(id);
}
