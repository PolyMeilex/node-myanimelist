import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class Season {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${jikanUrl}/season`;
  }
  info(year: number, season: season) {
    return jikanGet(joinUrl(this.baseUrl, [String(year), String(season)]));
  }
}

type season = "summer" | "spring" | "fall" | "winter";

export default function (year: number, season: season): Promise<any> {
  return new Season().info(year, season);
}
