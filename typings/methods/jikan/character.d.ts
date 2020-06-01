import { Req } from "./jikanApi";
import { CharacterInfo, Pictures } from "./types/character";
export declare class Character {
    private baseUrl;
    constructor(id: number);
    info(): Req<CharacterInfo>;
    pictures(): Req<Pictures>;
}
export default function (id: number): Character;
