declare class Manga {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): Promise<import("axios").AxiosResponse<any>>;
    characters(): Promise<import("axios").AxiosResponse<any>>;
    news(): Promise<import("axios").AxiosResponse<any>>;
    pictures(): Promise<import("axios").AxiosResponse<any>>;
    stats(): Promise<import("axios").AxiosResponse<any>>;
    forum(): Promise<import("axios").AxiosResponse<any>>;
    moreInfo(): Promise<import("axios").AxiosResponse<any>>;
    reviews(p?: number): Promise<import("axios").AxiosResponse<any>>;
    recommendations(): Promise<import("axios").AxiosResponse<any>>;
    userUpdates(p?: number): Promise<import("axios").AxiosResponse<any>>;
}
export default function (id: number): Manga;
export {};
