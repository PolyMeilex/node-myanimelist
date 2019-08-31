declare class Character {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): void;
    pictures(): void;
}
export default function (id: number): Character;
export {};
