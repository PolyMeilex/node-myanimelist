import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

class Manga {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${baseUrl}/manga/${id}`;
  }
  jikanGet(url: string) {
    console.log(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
  characters() {
    return this.jikanGet(joinUrl(this.baseUrl, ["characters"]));
  }
  news() {
    return this.jikanGet(joinUrl(this.baseUrl, ["news"]));
  }
  pictures() {
    return this.jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
  stats() {
    return this.jikanGet(joinUrl(this.baseUrl, ["stats"]));
  }
  forum() {
    return this.jikanGet(joinUrl(this.baseUrl, ["forum"]));
  }
  moreInfo() {
    return this.jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
  }
  reviews(p?: number) {
    let params: string[] = ["reviews"];
    if (p != null) params.push(String(p));
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
  recommendations() {
    return this.jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
  }
  userUpdates(p?: number) {
    let params: string[] = ["userupdates"];
    if (p != null) params.push(String(p));
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function(id: number): Manga {
  return new Manga(id);
}
