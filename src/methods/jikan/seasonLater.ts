import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class SeasonLater {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/season/later`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
}

export default function (): Promise<any> {
  return new SeasonLater().info();
}
