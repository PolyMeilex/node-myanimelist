import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class Club {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${baseUrl}/club/${id}`;
  }
  private jikanGet(url: string): Promise<any> {
    return axios.get(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
  members(p?: number) {
    let params: string[] = ["members"];
    if (p != null) params.push(String(p));
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function(id: number): Club {
  return new Club(id);
}
