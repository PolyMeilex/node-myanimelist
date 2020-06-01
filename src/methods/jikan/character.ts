import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

export class Character {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/character/${id}`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
  pictures() {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
}

export default function (id: number): Character {
  return new Character(id);
}
