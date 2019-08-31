declare class Anime {
    private baseUrl;
    constructor(id: number);
    private jikanGet;
    info(): Promise<any>;
    charactersStaff(): Promise<any>;
    episodes(p?: number): Promise<any>;
    news(): Promise<any>;
    pictures(): Promise<any>;
    videos(): Promise<any>;
    stats(): Promise<any>;
    forum(): Promise<any>;
    moreInfo(): Promise<any>;
    reviews(p?: number): Promise<any>;
    recommendations(): Promise<any>;
    userUpdates(p?: number): Promise<any>;
}
export default function (id: number): Anime;
export {};
