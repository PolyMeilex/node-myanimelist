import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class Club {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/club/${id}`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
  members(p?: number) {
    let params: string[] = ["members"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (id: number): Club {
  return new Club(id);
}
