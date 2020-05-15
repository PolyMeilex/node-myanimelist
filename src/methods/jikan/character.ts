import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class Character {
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
