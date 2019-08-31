declare class Anime {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): void;
    charactersStaff(): void;
    episodes(p?: number): void;
    news(): void;
    pictures(): void;
    videos(): void;
    stats(): void;
    forum(): void;
    moreInfo(): void;
    reviews(p?: number): void;
    recommendations(): void;
    userUpdates(p?: number): void;
}
export default function (id: number): Anime;
export {};
