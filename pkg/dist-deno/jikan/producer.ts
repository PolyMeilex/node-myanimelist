import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class Producer {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/producer`;
  }
  info(id: number, p?: number) {
    let params = [String(id)];
    if (p != null) params[1] = String(p);
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (id: number, p?: number): Promise<any> {
  return new Producer().info(id, p);
}
