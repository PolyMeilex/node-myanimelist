export declare class Top {
    private baseUrl;
    constructor();
    anime(): TopAnime;
    manga(): TopManga;
    people(): TopSimple;
    characters(): TopSimple;
}
export declare class TopSimple {
    private baseUrl;
    private type;
    constructor(baseUrl: string, type: string);
    private topGet;
    all(p?: number): Promise<any>;
}
export declare class TopAnime {
    private baseUrl;
    constructor(baseUrl: string);
    private topGet;
    all(p?: number): Promise<any>;
    airing(p?: number): Promise<any>;
    upcoming(p?: number): Promise<any>;
    tv(p?: number): Promise<any>;
    movie(p?: number): Promise<any>;
    ova(p?: number): Promise<any>;
    special(p?: number): Promise<any>;
    byPopularity(p?: number): Promise<any>;
    favorite(p?: number): Promise<any>;
}
export declare class TopManga {
    private baseUrl;
    constructor(baseUrl: string);
    private topGet;
    all(p?: number): Promise<any>;
    manga(p?: number): Promise<any>;
    novels(p?: number): Promise<any>;
    oneshots(p?: number): Promise<any>;
    doujin(p?: number): Promise<any>;
    manhwa(p?: number): Promise<any>;
    manhua(p?: number): Promise<any>;
    byPopularity(p?: number): Promise<any>;
    favorite(p?: number): Promise<any>;
}
export default function (): Top;
