import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class Character {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${baseUrl}/character/${id}`;
  }
  private jikanGet(url: string) {
    return axios.get(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
  pictures() {
    return this.jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
}

export default function(id: number): Character {
  return new Character(id);
}
