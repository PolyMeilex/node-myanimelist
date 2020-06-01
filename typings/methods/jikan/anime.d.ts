import { Req } from "./jikanApi";
import { AnimeInfo, AnimeCharactersStaff, Episodes, News, Pictures, AnimeVideos, AnimeStats, Forum, MoreInfo, AnimeReviews, Recommendations } from "./types/anime/";
declare class Anime {
    private baseUrl;
    constructor(id: number);
    info(): Req<AnimeInfo>;
    charactersStaff(): Req<AnimeCharactersStaff>;
    episodes(p?: number): Req<Episodes>;
    news(): Req<News>;
    pictures(): Req<Pictures>;
    videos(): Req<AnimeVideos>;
    stats(): Req<AnimeStats>;
    forum(): Req<Forum>;
    moreInfo(): Req<MoreInfo>;
    reviews(p?: number): Req<AnimeReviews>;
    recommendations(): Req<Recommendations>;
    userUpdates(p?: number): Promise<any>;
}
export default function (id: number): Anime;
export {};
