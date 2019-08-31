import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

class Anime {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${baseUrl}/anime/${id}`;
  }
  private jikanGet(url: string) {
    console.log(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
  charactersStaff() {
    return this.jikanGet(joinUrl(this.baseUrl, ["characters_staff"]));
  }
  episodes(p?: number) {
    let params: string[] = ["episodes"];
    if (p != null) params.push(String(p));
    return this.jikanGet(joinUrl(this.baseUrl, params));
  }
  news() {
    return this.jikanGet(joinUrl(this.baseUrl, ["news"]));
  }
  pictures() {
    return this.jikanGet(joinUrl(this.baseUrl, ["pictures"]));
  }
  videos() {
    return this.jikanGet(joinUrl(this.baseUrl, ["videos"]));
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

export default function(id: number): Anime {
  return new Anime(id);
}
