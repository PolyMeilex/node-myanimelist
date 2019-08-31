import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

class Season {
  private baseUrl: string;
  constructor(year: number, season: season) {
    this.baseUrl = `${baseUrl}/season/${year}/${season}`;
  }
  jikanGet(url: string) {
    console.log(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
}

type season = "summer" | "spring" | "fall" | "winter";

function season(year: number, season: season): Promise<any> {
  return new Promise(resolve => {
    resolve(new Season(year, season).info());
  });
}

season.debug = (year: number, season: season): string => {
  let s = new Season(year, season);
  // Return url instead of calling jikan api
  s.jikanGet = s => s;
  // @ts-ignore
  return s.info();
};

export default season;
