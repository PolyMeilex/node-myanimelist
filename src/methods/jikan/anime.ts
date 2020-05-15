import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";

class Anime {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/anime/${id}`;
  }
  info() {
    return jikanGet(this.baseUrl);
  }
  charactersStaff() {
    return jikanGet(joinUrl(this.baseUrl, ["characters_staff"]));
  }
  episodes(p?: number) {
    let params: string[] = ["episodes"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  news() {
    return jikanGet(joinUrl(this.baseUrl, ["news"]));
  }
  pictures() {
    return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
  videos() {
    return jikanGet(joinUrl(this.baseUrl, ["videos"]));
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

export default function (id: number): Anime {
  return new Anime(id);
}
