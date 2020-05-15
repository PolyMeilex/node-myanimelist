import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class SeasonArchive {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/season/archive`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
}

export default function (): Promise<any> {
  return new SeasonArchive().info();
}
