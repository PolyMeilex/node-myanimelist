import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class SeasonArchive {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/season/archive`;
  }
  private jikanGet(url: string) {
    return axios.get(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
}

function seasonArchive(): Promise<any> {
  return new Promise(resolve => {
    resolve(new SeasonArchive().info());
  });
}

seasonArchive.debug = (): string => {
  let s = new SeasonArchive();
  // Return url instead of calling jikan api
  // @ts-ignore
  s.jikanGet = s => s;
  // @ts-ignore
  return s.info();
};

export default seasonArchive;
