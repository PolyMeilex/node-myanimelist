import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

import axios from "axios";

class Schedule {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/schedule`;
  }
  private jikanGet(url: string) {
    return axios.get(url);
  }
  all() {
    return this.jikanGet(this.baseUrl);
  }
  monday() {
    return this.jikanGet(joinUrl(this.baseUrl, ["monday"]));
  }
  tuesday() {
    return this.jikanGet(joinUrl(this.baseUrl, ["tuesday"]));
  }
  wednesday() {
    return this.jikanGet(joinUrl(this.baseUrl, ["wednesday"]));
  }
  thursday() {
    return this.jikanGet(joinUrl(this.baseUrl, ["thursday"]));
  }
  friday() {
    return this.jikanGet(joinUrl(this.baseUrl, ["friday"]));
  }
  saturday() {
    return this.jikanGet(joinUrl(this.baseUrl, ["saturday"]));
  }
  sunday() {
    return this.jikanGet(joinUrl(this.baseUrl, ["sunday"]));
  }
  other() {
    return this.jikanGet(joinUrl(this.baseUrl, ["other"]));
  }
  unknown() {
    return this.jikanGet(joinUrl(this.baseUrl, ["unknown"]));
  }
}

export default function(): Schedule {
  return new Schedule();
}
