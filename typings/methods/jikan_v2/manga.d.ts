declare class Manga {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): void;
    characters(): void;
    news(): void;
    pictures(): void;
    stats(): void;
    forum(): void;
    moreInfo(): void;
    reviews(p?: number): void;
    recommendations(): void;
    userUpdates(p?: number): void;
}
export default function (id: number): Manga;
export {};
