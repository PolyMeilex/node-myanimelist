declare class Character {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): Promise<import("axios").AxiosResponse<any>>;
    pictures(): Promise<import("axios").AxiosResponse<any>>;
}
export default function (id: number): Character;
export {};
