import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

class SeasonLater {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/season/later`;
  }
  jikanGet(url: string) {
    console.log(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
}

function seasonLater(): Promise<any> {
  return new Promise(resolve => {
    resolve(new SeasonLater().info());
  });
}

seasonLater.debug = (): string => {
  let s = new SeasonLater();
  // Return url instead of calling jikan api
  s.jikanGet = s => s;
  // @ts-ignore
  return s.info();
};

export default seasonLater;
