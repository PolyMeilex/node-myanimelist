import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

export class Season {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/season`;
  }
  info(year: number, season: season) {
    return jikanGet(joinUrl(this.baseUrl, [String(year), String(season)]));
  }
}

export type season = "summer" | "spring" | "fall" | "winter";

export default function (year: number, season: season): Promise<any> {
  return new Season().info(year, season);
}
