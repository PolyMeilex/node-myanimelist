import { joinUrl } from "./url";
import { jikanGet, jikanUrl, Req } from "./jikanApi";
import { ClubInfo, ClubMembers } from "./types/club";

export class Club {
  private baseUrl: string;
  constructor(id: number) {
    this.baseUrl = `${jikanUrl}/club/${id}`;
  }
  info(): Req<ClubInfo> {
    return jikanGet(this.baseUrl);
  }
  members(p?: number): Req<ClubMembers> {
    let params: string[] = ["members"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
}

export default function (id: number): Club {
  return new Club(id);
}
