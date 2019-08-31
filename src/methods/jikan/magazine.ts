import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class Magazine {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/magazine`;
  }
  private jikanGet(url: string) {
    return axios.get(url);
  }
  info(id: number, p?: number) {
    let params = [String(id)];
    if (p != null) params[1] = String(p);
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
}

function magazine(id: number, p?: number): Promise<any> {
  return new Promise(resolve => {
    resolve(new Magazine().info(id, p));
  });
}

magazine.debug = (id: number, p?: number): string => {
  let s = new Magazine();
  // Return url instead of calling jikan api
  // @ts-ignore
  s.jikanGet = s => s;
  // @ts-ignore
  return s.info(id, p);
};

export default magazine;
