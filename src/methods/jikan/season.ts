import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class Season {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/season`;
  }
  private jikanGet(url: string) {
    return axios.get(url);
  }
  info(year: number, season: season) {
    return this.jikanGet(joinUrl(this.baseUrl, [String(year), String(season)]));
  }
}

type season = "summer" | "spring" | "fall" | "winter";

function season(year: number, season: season): Promise<any> {
  return new Promise(resolve => {
    resolve(new Season().info(year, season));
  });
}

season.debug = (year: number, season: season): string => {
  let s = new Season();
  // Return url instead of calling jikan api
  // @ts-ignore
  s.jikanGet = s => s;
  // @ts-ignore
  return s.info(year, season);
};

export default season;
