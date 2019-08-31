import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class Person {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${baseUrl}/person/${id}`;
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

export default function(id: number): Person {
  return new Person(id);
}
