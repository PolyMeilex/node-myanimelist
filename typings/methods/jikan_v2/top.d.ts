declare class Top {
    private baseUrl;
    constructor();
    private jikanGet;
    anime(): TopAnime;
    manga(): TopManga;
    people(): TopSimple;
    characters(): TopSimple;
}
declare class TopSimple {
    private parent;
    private type;
    constructor(parent: Top, type: string);
    private topGet;
    all(p?: number): Promise<import("axios").AxiosResponse<any>>;
}
declare class TopAnime {
    private parent;
    constructor(parent: Top);
    private topGet;
    all(p?: number): Promise<import("axios").AxiosResponse<any>>;
    airing(p?: number): Promise<import("axios").AxiosResponse<any>>;
    upcoming(p?: number): Promise<import("axios").AxiosResponse<any>>;
    tv(p?: number): Promise<import("axios").AxiosResponse<any>>;
    movie(p?: number): Promise<import("axios").AxiosResponse<any>>;
    ova(p?: number): Promise<import("axios").AxiosResponse<any>>;
    special(p?: number): Promise<import("axios").AxiosResponse<any>>;
    byPopularity(p?: number): Promise<import("axios").AxiosResponse<any>>;
    favorite(p?: number): Promise<import("axios").AxiosResponse<any>>;
}
declare class TopManga {
    private parent;
    constructor(parent: Top);
    private topGet;
    all(p?: number): Promise<import("axios").AxiosResponse<any>>;
    manga(p?: number): Promise<import("axios").AxiosResponse<any>>;
    novels(p?: number): Promise<import("axios").AxiosResponse<any>>;
    oneshots(p?: number): Promise<import("axios").AxiosResponse<any>>;
    doujin(p?: number): Promise<import("axios").AxiosResponse<any>>;
    manhwa(p?: number): Promise<import("axios").AxiosResponse<any>>;
    manhua(p?: number): Promise<import("axios").AxiosResponse<any>>;
    byPopularity(p?: number): Promise<import("axios").AxiosResponse<any>>;
    favorite(p?: number): Promise<import("axios").AxiosResponse<any>>;
}
export default function (): Top;
export {};
