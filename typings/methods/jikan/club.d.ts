import { Req } from "./jikanApi";
import { ClubInfo, ClubMembers } from "./types/club";
export declare class Club {
    private baseUrl;
    constructor(id: number);
    info(): Req<ClubInfo>;
    members(p?: number): Req<ClubMembers>;
}
export default function (id: number): Club;
