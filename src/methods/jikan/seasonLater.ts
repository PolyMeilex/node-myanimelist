import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

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
