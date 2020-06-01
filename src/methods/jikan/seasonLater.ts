import { jikanGet, jikanUrl } from "./jikanApi";

export class SeasonLater {
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
