import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

export class Manga {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/manga/${id}`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
  characters() {
    return jikanGet(joinUrl(this.baseUrl, ["characters"]));
  }
  news() {
    return jikanGet(joinUrl(this.baseUrl, ["news"]));
  }
  pictures() {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
  stats() {
    return jikanGet(joinUrl(this.baseUrl, ["stats"]));
  }
  forum() {
    return jikanGet(joinUrl(this.baseUrl, ["forum"]));
  }
  moreInfo() {
    return jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
  }
  reviews(p?: number) {
    let params: string[] = ["reviews"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  recommendations() {
    return jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
  }
  userUpdates(p?: number) {
    let params: string[] = ["userupdates"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (id: number): Manga {
  return new Manga(id);
}
