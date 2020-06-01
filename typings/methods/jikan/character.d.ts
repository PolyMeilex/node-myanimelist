export declare class Character {
    private baseUrl;
    constructor(id: number);
    info(): Promise<any>;
    pictures(): Promise<any>;
}
export default function (id: number): Character;
