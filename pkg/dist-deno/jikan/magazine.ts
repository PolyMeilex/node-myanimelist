import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class Magazine {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/magazine`;
  }
  info(id: number, p?: number) {
    let params = [String(id)];
    if (p != null) params[1] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (id: number, p?: number): Promise<any> {
  return new Magazine().info(id, p);
}
