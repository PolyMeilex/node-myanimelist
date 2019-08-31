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
declare class Top {
    private baseUrl;
    constructor();
    private jikanGet;
    anime(): TopAnime;
}
export default function (): Top;
export {};
