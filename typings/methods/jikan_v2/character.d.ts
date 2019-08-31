declare class Character {
    private baseUrl;
    constructor(id: number);
    jikanGet(url: string): void;
    info(): void;
    pictures(): void;
}
export default function (id: number): Character;
export {};
