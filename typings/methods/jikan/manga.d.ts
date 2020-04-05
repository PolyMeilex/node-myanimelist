declare class Manga {
    private baseUrl;
    constructor(id: number);
    info(): Promise<any>;
    characters(): Promise<any>;
    news(): Promise<any>;
    pictures(): Promise<any>;
    stats(): Promise<any>;
    forum(): Promise<any>;
    moreInfo(): Promise<any>;
    reviews(p?: number): Promise<any>;
    recommendations(): Promise<any>;
    userUpdates(p?: number): Promise<any>;
}
export default function (id: number): Manga;
export {};
