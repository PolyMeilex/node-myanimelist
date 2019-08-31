declare class TopAnime {
    private parent;
    constructor(parent: Top);
    private topGet;
    all(p?: number): void;
    airing(p?: number): void;
    upcoming(p?: number): void;
    tv(p?: number): void;
    movie(p?: number): void;
    ova(p?: number): void;
    special(p?: number): void;
    byPopularity(p?: number): void;
    favorite(p?: number): void;
}
declare class TopManga {
    private parent;
    constructor(parent: Top);
    private topGet;
    all(p?: number): void;
    manga(p?: number): void;
    novels(p?: number): void;
    oneshots(p?: number): void;
    doujin(p?: number): void;
    manhwa(p?: number): void;
    manhua(p?: number): void;
    byPopularity(p?: number): void;
    favorite(p?: number): void;
}
declare class TopSimple {
    private parent;
    private type;
    constructor(parent: Top, type: string);
    private topGet;
    all(p?: number): void;
}
declare class Top {
    private baseUrl;
    constructor();
    private jikanGet;
    anime(): TopAnime;
    manga(): TopManga;
    people(): TopSimple;
    characters(): TopSimple;
}
export default function (): Top;
export {};
