declare class Top {
    private baseUrl;
    constructor();
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
    all(p?: number): Promise<any>;
}
declare class TopAnime {
    private parent;
    constructor(parent: Top);
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
declare class TopManga {
    private parent;
    constructor(parent: Top);
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
export {};
